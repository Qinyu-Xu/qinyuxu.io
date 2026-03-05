import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host')?.split(':')[0] ?? '';

  if (hostname === 'qinyuxu.me') {
    return NextResponse.rewrite(new URL('/me', request.url));
  }

  if (hostname === 'qinyuxu.io' && request.nextUrl.pathname === '/me') {
    return NextResponse.redirect('https://qinyuxu.me', 302);
  }
}

export const config = {
  matcher: ['/:path*'],
};
