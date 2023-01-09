const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      // 要访问的后端地址 https://localhost:7130/api 被代理成 /api
      "/api": {
        target: "https://localhost:7130/api",
        changeOrigin: true, // 允许跨域
        vs: true,
        pathRewrite: {
          "^/api": "",
        },
      },
    },
  },
});
