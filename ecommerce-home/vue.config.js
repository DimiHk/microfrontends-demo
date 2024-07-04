const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  configureWebpack: {
    output: {
      libraryTarget: "system",
    },
    externals: ["@ecommerce/ecommerce-utils"],
  },
  transpileDependencies: true,
});
