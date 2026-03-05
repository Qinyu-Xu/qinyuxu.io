import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') ?? '';
  const hostnameWithoutPort = hostname.split(':')[0];

  console.log('host header:', hostname);
  console.log('hostname:', hostnameWithoutPort);

  if (hostnameWithoutPort === 'qinyuxu.me' || hostnameWithoutPort === 'www.qinyuxu.me') {
    const url = request.nextUrl.clone();
    url.pathname = '/me';
    return NextResponse.rewrite(url);
  }

  if (
    (hostnameWithoutPort === 'qinyuxu.io' || hostnameWithoutPort === 'www.qinyuxu.io') &&
    request.nextUrl.pathname === '/me'
  ) {
    return NextResponse.redirect('https://qinyuxu.me', 302);
  }
}

export const config = {
  matcher: ['/((?!_next|favicon.ico|.*\\..*).*)', '/'],
};
