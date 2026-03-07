import { NextRequest, NextResponse } from 'next/server';

export function proxy(request: NextRequest) {
  const hostname = request.headers.get('host') ?? '';
  const hostnameWithoutPort = hostname.split(':')[0];
  const country = (request as any).geo?.country;

  const isMe =
    hostnameWithoutPort === 'qinyuxu.me' ||
    hostnameWithoutPort === 'www.qinyuxu.me';

  const isAcademic =
    hostnameWithoutPort === 'qinyuxu.io' ||
    hostnameWithoutPort === 'www.qinyuxu.io';

  // qinyuxu.me: 全站 noindex；中国用户 404
  if (isMe) {
    if (country === 'CN') {
      return new NextResponse('404', {
        status: 404,
        headers: {
          'Content-Type': 'text/plain; charset=utf-8',
          'X-Robots-Tag': 'noindex',
        },
      });
    }

    const response = NextResponse.next();
    response.headers.set('X-Robots-Tag', 'noindex');
    response.headers.set('Cache-Control', 'no-store');
    return response;
  }

  // qinyuxu.io/me -> qinyuxu.me
  if (isAcademic && request.nextUrl.pathname === '/me') {
    return NextResponse.redirect('https://qinyuxu.me', 302);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/:path*'],
};