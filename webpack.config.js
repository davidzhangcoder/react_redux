const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin'); //导入 在内存中自动生成 index 页面的插件

const htmlWebPackPlugin = new HtmlWebPackPlugin({
    template: path.join(__dirname, "./src/index.html") , //指明源文件的位置, __dirname是指当前文件(即webpack.config.js)所在的目录
    filename: 'index.html'//生成的内存中首页的名称 
});

//向外暴露一个打包的配置对象
//Webpack默认只能打包处理 .js 后缀名类型的文件，像 .png .vue 无法主动处理，所以要配置第三方的loader (即第三方模块)
module.exports = {
    mode : 'development', // development production
    //devtool: false

    plugins: [
        htmlWebPackPlugin
    ],

    module : { //所有第三方 模块的配置规则
        //
        rules : [ //第三方配置规则
            {
                test : /\.js|jsx$/,
                use : 'babel-loader',
                exclude : /node_modules/ //exclude必须要加
            }
        ]
    },

    resolve : {
        extensions : ['.js','.jsx','.json'], //表示这几个文件的后缀名，可以省略不写
        alias : {
            '@' : path.join(__dirname, './src')
        }
    }
}