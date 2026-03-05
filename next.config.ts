import type { NextConfig } from 'next';
import createMDX from '@next/mdx';
import postgres from 'postgres';

export const sql = postgres(process.env.POSTGRES_URL!, {
  ssl: 'allow'
});

const nextConfig: NextConfig = {
  pageExtensions: ['mdx', 'ts', 'tsx'],
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/:path*',
          has: [{ type: 'host', value: 'qinyuxu.me' }],
          destination: '/me',
        },
      ],
    };
  },
  async redirects() {
    const hostRedirects = [
      {
        source: '/me',
        has: [{ type: 'host', value: 'qinyuxu.io' }],
        destination: 'https://qinyuxu.me',
        permanent: false,
      },
    ];

    if (!process.env.POSTGRES_URL) {
      return hostRedirects;
    }

    let redirects = await sql`
      SELECT source, destination, permanent
      FROM redirects;
    `;

    return [
      ...hostRedirects,
      ...redirects.map(({ source, destination, permanent }) => ({
        source,
        destination,
        permanent: !!permanent,
      })),
    ];
  },
  // Note: Using the Rust compiler means we cannot use
  // rehype or remark plugins. If you need them, remove
  // the `experimental.mdxRs` flag.
  experimental: {
    mdxRs: { mdxType: 'gfm' }
  }
 };

const withMDX = createMDX({});

export default withMDX(nextConfig);
