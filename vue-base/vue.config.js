const assetsPublicPath =
  process.env.NODE_ENV === "production"
    ? `/webApp/`
    : "/";
module.exports = {
  publicPath: assetsPublicPath,
  // 将构建好的文件输出到哪里
  outputDir: "webApp",
  pages: {
    index: {
      // page 的入口
      entry: "src/pages/index/main.js",
      // 模板来源
      template: "src/pages/index/tpl.html",
      // 在 dist/index.html 的输出
      filename: "index.html",
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: "",
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      chunks: ["chunk-vendors", "chunk-common", "index"]
    },
    business: {
      // page 的入口
      entry: "src/pages/business/main.js",
      // 模板来源
      template: "src/pages/business/tpl.html",
      // 在 dist/business.html 的输出
      filename: "business.html",
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: "",
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      chunks: ["chunk-vendors", "chunk-common", "business"]
    }
  },
  // 请求代理：根据接口服务修改
  devServer: {
    port: 8081,
    proxy: {
      "/api": {
        target: "http://127.0.0.1:3000",
        ws: true,
        changeOrigin: true
      }
    }
  },
  // 生产环境下的sourceMap
  productionSourceMap: process.env.node_env !== "production",
  chainWebpack: (config) => {
    if (process.env.NODE_ENV === "production") {
      // 为生产环境修改配置...
      config.externals({
        vue: "Vue",
        "vue-router": "VueRouter"
      });
    } else {
      // 为开发环境修改配置...
    }

    config.module
      .rule("fonts")
      .test(/\.(woff2?|eot|ttf|otf)(\?.*)?$/i)
      .use("url-loader")
      .loader("url-loader")
      .options({
        limit: 4096,
        name: "fonts/[name].[hash:7].[ext]",
        publicPath: assetsPublicPath
      });
    config.module
      .rule("images")
      .test(/\.(png|jpe?g|gif|webp)(\?.*)?$/)
      .use("url-loader")
      .loader("url-loader")
      .options({
        limit: 1024,
        name: "img/[name].[hash:7].[ext]",
        publicPath: assetsPublicPath
      });
  }
  // lintOnSave: false // 关闭eslint检查
};
