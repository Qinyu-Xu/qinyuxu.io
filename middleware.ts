import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const country = (request as any).geo?.country;
  const hostname = request.headers.get('host') ?? '';
  const hostnameWithoutPort = hostname.split(':')[0];

  if (country === 'CN' && (hostnameWithoutPort === 'qinyuxu.me' || hostnameWithoutPort === 'www.qinyuxu.me')) {
    return new NextResponse('404', { status: 404 });
  }

  console.log('host header:', hostname);
  console.log('hostname:', hostnameWithoutPort);
  console.log('pathname:', request.nextUrl.pathname);

  if (hostnameWithoutPort === 'qinyuxu.me' || hostnameWithoutPort === 'www.qinyuxu.me') {
    const url = request.nextUrl.clone();
    url.pathname = '/me';
    const response = NextResponse.rewrite(url);
    response.headers.set('x-domain', 'me');
    return response;
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
