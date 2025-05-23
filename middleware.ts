import { NextResponse } from 'next/server'
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { getIdFromHostname } from '@/lib/redis';
const isOnboardRoute = createRouteMatcher(['/onboard(.*)',])
const isProtectedRoute = createRouteMatcher(['/dashboard(.*)',])
export default clerkMiddleware(async (auth, request) => {
    // if user is on production url, we need to check auth and make sure redirect is correct
    console.log('request.nextUrl.hostname', request.nextUrl.hostname)
    console.log('process.env.VERCEL_PROJECT_PRODUCTION_URL', process.env.VERCEL_PROJECT_PRODUCTION_URL)
    console.log(process.env.VERCEL_PROJECT_PRODUCTION_URL === request.nextUrl.hostname)
    if (process.env.VERCEL_PROJECT_PRODUCTION_URL === request.nextUrl.hostname) {
        const { userId, sessionClaims, redirectToSignIn } = await auth()

        // If the user isn't signed in and the route is private or onboarding, redirect to sign-in
        if (!userId && (isProtectedRoute(request) || isOnboardRoute(request))) return redirectToSignIn({ returnBackUrl: request.url })
       
        //if user is not authenticated, dont redirect 
        if(!userId){
            return NextResponse.next() 
        }

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



    console.log('Getting hostID for hostname', request.nextUrl.hostname)
    // if not production, don't rewrite for dev for dev purposes
    if (process.env.VERCEL_ENV === 'development') {
        return
    }
    const hostID = await getIdFromHostname(request.nextUrl.hostname)
    // if production env, utilize production url, if not use preview or dev url
    const baseUrl = process.env.VERCEL_ENV === 'production' ? `${request.nextUrl.protocol}//${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : `${request.nextUrl.protocol}//${process.env.VERCEL_URL}`
    // if no hostID found, return base route

    // prepare pathname to append to rewrite
    const pathname = request.nextUrl.pathname === "/" ? '' : request.nextUrl.pathname
    // Perform rewrite -- this will ensure the url path will not change and user will no see url change or be redirected
    return NextResponse.rewrite(new URL(`/${hostID}${pathname}`, baseUrl))

})

// See "Matching Paths" below to learn more
export const config = {
    matcher: ['/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    ],
}