const path = require('path');
const px2rem = require('postcss-px2rem')
// 配置postcs-px2rem
const postcss = px2rem({
  remUnit: 75  //基准大小 baseSize，需要和rem.js中单位rem值占比一样相同
})
function resolve (dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    lintOnSave: false,
    configureWebpack: {
        resolve: {
          extensions: ['.js', '.vue', '.json'],
          alias: {
            'vue$': 'vue/dist/vue.esm.js', // 加载Vue带有解析器的文件，识别template
            '@': resolve('src'), // 设置文件查找路径，可简写文件查找路径
            'components': resolve('src/components'),
          }
        }
      },
    css: { // 添加postcss配置
        loaderOptions: {
          postcss: {
            plugins: [
              postcss
            ]
          }
        }
      },  

}
