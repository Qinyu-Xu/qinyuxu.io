import './globals.css';
import type { Metadata } from 'next';
import { STIX_Two_Text } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { headers } from 'next/headers';
import { Footer } from '@/components/footer';

const stixTwoText = STIX_Two_Text({ subsets: ['latin'], weight: ['400', '700'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://yoursite.github.io'),
  alternates: {
    canonical: '/'
  },
  title: {
    default: 'Qinyu Xu',
    template: '%s | Qinyu Xu'
  },
  description: 'Ph.D. student at the Courant Institute of Mathematical Sciences, New York University. Advised by Aurojit Panda.',
  icons: { icon: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🎓</text></svg>' }
};

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersList = await headers();
  const host = headersList.get('host') ?? '';
  const isMe = host === 'qinyuxu.me' || host === 'www.qinyuxu.me';

  return (
    <html lang="en" className={`${stixTwoText.className}`}>
      <body className="antialiased tracking-tight">
        <div className="min-h-screen flex flex-col justify-between pt-0 md:pt-8 p-8 dark:bg-zinc-950 bg-white text-gray-900 dark:text-zinc-200">
          <main className="max-w-[80ch] mx-auto w-full space-y-6">
            {children}
          </main>
          <Footer isMe={isMe} />
          <Analytics />
        </div>
      </body>
    </html>
  );
}

