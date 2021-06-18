module.exports = {
  // publicPath: "/",
  devServer: {
    proxy: {
      //配置代理
      "/api": {
        target: "需要代理服务器地址", // 测试服
        changOrigin: true, //允许跨域
        secure: false, // 如果是https接口，需要配置这个参数
        pathRewrite: {
          "^/api": ""
        }
      },
    }
  },
}