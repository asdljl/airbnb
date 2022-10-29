const path = require("path");
const CracoLessPlugin = require('craco-less')

const resolve =pathname => path.resolve(__dirname,pathname)

module.exports = {
  // less配置
  plugin: [
    {
      plugin: CracoLessPlugin
    }
  ],
  // webpack配置
  webpack: {
    alias: {
      "@": resolve("src"),
      "components": resolve("src/components"),
      "utils": resolve("src/utils")
    },
  }
}