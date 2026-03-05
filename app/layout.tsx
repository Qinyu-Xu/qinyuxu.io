import './globals.css';
import type { Metadata } from 'next';
import { STIX_Two_Text } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';

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
  description: 'Ph.D. student at the Courant Institute of Mathematical Sciences, New York University. Advised by Aurojit Panda.'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${stixTwoText.className}`}>
      <body className="antialiased tracking-tight">
        <div className="min-h-screen flex flex-col justify-between pt-0 md:pt-8 p-8 dark:bg-zinc-950 bg-white text-gray-900 dark:text-zinc-200">
          <main className="max-w-[80ch] mx-auto w-full space-y-6">
            {children}
          </main>
          <Footer />
          <Analytics />
        </div>
      </body>
    </html>
  );
}

function Footer() {
  const links = [
    { name: 'email', url: 'mailto:qinyu.xu@nyu.edu' },
    { name: 'google scholar', url: 'https://scholar.google.com/citations?user=tGcgxQQAAAAJ&hl=en' },
    { name: 'github', url: 'https://github.com/Qinyu-Xu' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/qinyu-xu-10b324380/' }
  ];

  return (
    <footer className="mt-12 text-center">
      <div className="flex justify-center space-x-4 tracking-tight">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 dark:text-gray-500 hover:text-blue-500 transition-colors duration-200"
          >
            {link.name}
          </a>
        ))}
      </div>
    </footer>
  );
}
