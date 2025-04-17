import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    console.log('Middleware triggered')
    return NextResponse.rewrite(new URL(`/${request.nextUrl.hostname}`, process.env.NEXT_PUBLIC_SITE_URL))
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: '/',
}