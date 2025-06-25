/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizeFonts: true, // Optimizes font loading for better performance
  },
  webpack(config) {
    // Custom Webpack configuration if you want to handle fonts more explicitly
    config.module.rules.push({
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      use: {
        loader: "file-loader",
        options: {
          name: "static/fonts/[name].[hash:8].[ext]",
        },
      },
    });
    return config;
  },
};

module.exports = nextConfig;
