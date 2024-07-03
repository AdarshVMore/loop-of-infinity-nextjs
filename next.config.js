// next.config.js
module.exports = {
  webpack: (config, { isServer }) => {
    // For client-side only
    if (!isServer) {
      config.module.rules.push({
        test: /\.(mp4|webm|ogg|swf|ogv)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "static/media/",
            publicPath: "/_next/static/media/",
          },
        },
      });
    }

    return config;
  },
};
