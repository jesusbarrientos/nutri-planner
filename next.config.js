const path = require('path')

const nextConfig = {
  reactStrictMode: true,

  async redirects() {
    return [
      {
        source: '/',
        destination: '/login',
        permanent: true,
      },
    ]
  },

  sassOptions: {
    includePaths: [
      path.join(__dirname, 'styles'),
    ],
  },
}

module.exports = nextConfig
