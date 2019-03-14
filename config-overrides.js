const path=require('path')

const {
    override,
    addWebpackAlias,
    fixBabelImports
  } = require("customize-cra");
   
  module.exports = override(
    addWebpackAlias({
        ["styles"]: path.resolve(__dirname, "./src/assets/styles")
    }),
    fixBabelImports("antd-mobile", {
        libraryName: "antd-mobile", 
        style: "css"
    })
  );