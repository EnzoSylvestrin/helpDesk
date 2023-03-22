/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_KEY: process.env.OPENAI_API_KEY,
    ORG_ID: process.env.OPENAI_ORG_ID
  }
}

module.exports = nextConfig
