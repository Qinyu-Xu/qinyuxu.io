const nextConfig = {
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/:path*',
          destination: '/me/:path*',
          has: [{ type: 'host', value: '(?:www\\.)?qinyuxu\\.me' }],
        },
      ],
    }
  },
}

export default nextConfig