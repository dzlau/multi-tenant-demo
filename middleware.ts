import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    console.log('Middleware triggered')
    console.log(process.env.VERCEL_URL)
    console.log(new URL(`/${request.nextUrl.hostname}`, process.env.VERCEL_URL))
    return NextResponse.rewrite(new URL(`/${request.nextUrl.hostname}`, process.env.VERCEL_URL))
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: '/',
}