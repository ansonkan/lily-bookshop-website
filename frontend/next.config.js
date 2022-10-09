/* eslint-disable @typescript-eslint/no-var-requires */
const WindiCSSWebpackPlugin = require('windicss-webpack-plugin')
const UnpluginIconsPlugin = require('unplugin-icons/webpack')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack(config) {
    config.plugins.push(new WindiCSSWebpackPlugin())

    config.plugins.push(
      UnpluginIconsPlugin({
        compiler: 'jsx',
        jsx: 'react',
        extension: 'jsx',
      })
    )

    return config
  },
}

module.exports = nextConfig
