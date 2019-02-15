const path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin'); //引用
module.exports={
	mode:'development',
	// entry: './src/script/main.js', //入口文件
	// entry: ['./src/script/main.js','./src/script/a.js'],
	entry: {
		main:'./src/script/main.js',
		a:'./src/script/a.js',
		b:'./src/script/b.js',
		c:'./src/script/c.js'
	},
	output:{
		// path:'./dist/js',
		path: path.resolve(__dirname, "dist/"), // string
		// filename:'[name]-[hash].js'
		filename:'js/[name]-[chunkhash].js',
		publicPath:'http://www.baidu.com/'
	},
	plugins: [
        new HtmlWebpackPlugin({
        	filename:'src/a.html',
        	template:'index.html', //选择模板文件
        	inject: false, // 不插入
        	chunks: ['main','a'],
        	title:'this is a.html',
        	/*minify:{ //压缩html文件
        		collapseWhitespace:true, // 删除空格
        		removeComments:true, //删除注释
        	}*/
        }),
        new HtmlWebpackPlugin({
        	filename:'src/b.html',
        	template:'index.html', //选择模板文件
        	inject: 'head',
        	title:"this is b.html",
        	chunks:["main","b"]
        }),
        new HtmlWebpackPlugin({
        	filename:'src/c.html',
        	template:'index.html', //选择模板文件
        	inject: 'head',
        	title:'this is c.html',
        	chunks:["main","c"]
        })
    ]
}