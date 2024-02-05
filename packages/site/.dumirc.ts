import { defineConfig } from "dumi";

export default defineConfig({
  themeConfig: {
    name: "ren-cli-site",
    prefersColor: {
      default: "dark",
    },
  },
  outputPath: "site",
  base:'/ren-cli-site/',
  publicPath:'/ren-cli-site/',
  cssPublicPath:'/ren-cli-site/'
});
