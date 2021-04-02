module.exports = {
  pluginOptions: {
    electronBuilder: {
      nodeIntegration: true,
      builderOptions: {
        win: {
            target: ["portable"]
        }
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        "../../build/Release/scsSDKTelemetry": "../../build/Release/scsSDKTelemetry.node"
      }
    },
    module: {
      rules: [
        {
          test: /\.node$/,
          loader: 'node-loader',
        }
      ]
    }
  }
}