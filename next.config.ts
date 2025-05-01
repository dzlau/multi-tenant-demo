/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config: any, { isServer }: any) => {
    if (isServer) {
      // This ensures that Prisma's query engine binary is included in the server build
      config.externals = [...config.externals, 'prisma', '@prisma/client']
    }
    return config
  },
  // Optionally, if you're using environment variables in your project

}

module.exports = nextConfig