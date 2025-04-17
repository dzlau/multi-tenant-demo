import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { get } from '@vercel/edge-config';
// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
    console.log('Middleware triggered')
    const hostname = request.nextUrl.hostname.replaceAll('.', '-')
    const hostID = await get(hostname);
    console.log('Host ID:', hostID)
    return NextResponse.rewrite(new URL(`/${hostID}`, process.env.VERCEL_URL))
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: '/',
}