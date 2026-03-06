const nextConfig = {
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/',
          destination: '/me',
          has: [{ type: 'host', value: '(?:www\\.)?qinyuxu\\.me' }],
        },
      ],
    }
  },
}

export default nextConfig