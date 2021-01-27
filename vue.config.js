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
  }
}