import { NextResponse } from 'next/server'
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { getIdFromHostname } from '@/lib/redis';
const isOnboardRoute = createRouteMatcher(['/onboard(.*)',])
const isProtectedRoute = createRouteMatcher(['/dashboard(.*)',])
export default clerkMiddleware(async (auth, request) => {
    // if user is on production url, we need to check auth and make sure redirect is correct
    console.log('request.nextUrl.hostname', request.nextUrl.hostname)
    console.log('process.env.VERCEL_PROJECT_PRODUCTION_URL', process.env.VERCEL_PROJECT_PRODUCTION_URL)
    if (process.env.VERCEL_PROJECT_PRODUCTION_URL === request.nextUrl.hostname) {
        const { userId, sessionClaims, redirectToSignIn } = await auth()

        // If the user isn't signed in and the route is private, redirect to sign-in
        if (!userId && isProtectedRoute(request)) return redirectToSignIn({ returnBackUrl: request.url })

        // if user is onboarding or in protected route, dont redirect
        if (userId && (isOnboardRoute(request) || isProtectedRoute(request))) {
            return NextResponse.next()
        }
        // Catch users who do not have `onboardingComplete: true` in their publicMetadata
        // Redirect them to the /onboarding route to complete onboarding
        if (userId && !sessionClaims?.metadata?.onboardingComplete) {
            const onboardingUrl = new URL('/onboard', request.url)
            return NextResponse.redirect(onboardingUrl)
        }

        // check if user is authenticated and has onboardingComplete
        if (userId && sessionClaims?.metadata?.onboardingComplete && request.nextUrl.pathname === '/') {
            return NextResponse.redirect(new URL('/dashboard', request.url))
        }
    }



    console.log('Middleware triggered')
    const testHost = "test7.dennislau.xyz"
    const hostID = await getIdFromHostname(testHost);
    // no hostID found, no rewrite is required
    if (!hostID) {
        return
    }
    console.log('hostID', hostID)
    // if production env, utilize production url, if not use preview or dev url
    const baseUrl = process.env.VERCEL_ENV === 'production' ? `${request.nextUrl.protocol}//${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : `${request.nextUrl.protocol}//${process.env.VERCEL_URL}`
    console.log('baseUrl', baseUrl)
    // if no hostID found, return base route

    // prepare pathname to append to rewrite
    const pathname = request.nextUrl.pathname === "/" ? '' : request.nextUrl.pathname
    console.log('pathname', pathname)
    // Perform rewrite -- this will ensure the url path will not change and user will no see url change or be redirected
    return NextResponse.rewrite(new URL(`/${hostID}${pathname}`, baseUrl))

})

// See "Matching Paths" below to learn more
export const config = {
    matcher: ['/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    ],
}