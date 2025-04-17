import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { get } from '@vercel/edge-config';
// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
    console.log('Middleware triggered')
    const hostname = request.nextUrl.hostname.replaceAll('.', '-')
    console.log('Hostname:', hostname)
    const hostID = await get(hostname);
    console.log('Host ID:', hostID)
    request.nextUrl.protocol
    const baseUrl = process.env.VERCEL_ENV === 'production' ? `${request.nextUrl.protocol}//${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : `${request.nextUrl.protocol}//${process.env.VERCEL_URL}`
    return NextResponse.rewrite(new URL(`/${hostID}${request.nextUrl.pathname}`, baseUrl))
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: ['/', '/shop'],
}