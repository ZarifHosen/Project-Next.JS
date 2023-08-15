/** @type {import('next').NextConfig} */
const nextConfig = {
    serverComponentsExternalPackages: ['bcrypt'],
    env: {
        COOKIE_NAME: process.env.COOKIE_NAME
    }, typescript: {
        ignoreBuildErrors: true,
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
}

module.exports = nextConfig
