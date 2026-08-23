import type { NextConfig } from 'next';

const isStatic = process.env.STATIC_EXPORT === 'true';
const basePath = process.env.BASE_PATH ?? ''; // e.g. '/~NetID' for Courant

export const dynamic = 'force-static';   // <-- add this

const nextConfig: NextConfig = isStatic
  ? {
      output: 'export',
      basePath,
      assetPrefix: basePath || undefined,
      trailingSlash: true,
      images: { unoptimized: true },
    }
  : {
      async rewrites() {
        return {
          beforeFiles: [
            {
              source: '/',
              destination: '/me',
              has: [{ type: 'host', value: '(?:www\\.)?qinyuxu\\.me' }],
            },
          ],
        };
      },
    };

export default nextConfig;