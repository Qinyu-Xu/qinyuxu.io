import { NextRequest, NextResponse } from 'next/server';

export function proxy(request: NextRequest) {
  const country = (request as any).geo?.country;
  const hostname = request.headers.get('host') ?? '';
  const hostnameWithoutPort = hostname.split(':')[0];
  const isMe = hostnameWithoutPort === 'qinyuxu.me' || hostnameWithoutPort === 'www.qinyuxu.me';

  if (isMe && country === 'CN') {
    return new NextResponse('404', { status: 404 });
  }

  if (isMe && request.nextUrl.pathname === '/robots.txt') {
    return new NextResponse('User-agent: *\nDisallow: /', {
      headers: { 'Content-Type': 'text/plain' },
    });
  }

  if (
    (hostnameWithoutPort === 'qinyuxu.io' || hostnameWithoutPort === 'www.qinyuxu.io') &&
    request.nextUrl.pathname === '/me'
  ) {
    return NextResponse.redirect('https://qinyuxu.me', 302);
  }
}

export const config = {
  matcher: ['/:path*'],
};