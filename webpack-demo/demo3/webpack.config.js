const path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin'); //引用
module.exports={
	mode:'development',
	// entry: './src/script/main.js', //入口文件
	// entry: ['./src/script/main.js','./src/script/a.js'],
	entry: {
        app:'./src/app.js'
    },
	output:{
		path: path.resolve(__dirname, "dist/"), // string
		// filename:'[name]-[hash].js'
		filename:'js/[name].bundle.js',
	},
	plugins: [
        new HtmlWebpackPlugin({
        	filename:'index.html',
        	template:'index.html', //选择模板文件
        	inject: 'body', // 文件引入到<body>里边
        	title:'this is index'
        })
    ],
    module: {
      rules: [
        { 
            test: /\.js$/, 
            loader: "babel-loader",
            //exclude: "/node_modules/", //不处理的文件
            exclude: path.resolve(__dirname, "node_modules/"), // 解析成绝对路径
            //include:path.resolve(__dirname, "src/"), //需要处理的文件
            /*query:{
                presets:['latest']
            }*/
        },
        /*{
            test:/\.css$/,
            loader:'style-loader!css-loader?importLoaders=1!postcss-loader'
        },*/
        {
            test: /\.css$/,
            use: [
                'style-loader', 
                {loader:'css-loader',options:{importLoaders:1}},
                { loader: "postcss-loader", options:{
                        plugins: [ require("autoprefixer")({ 
                            browsers: ['last 5 versions'] }) 
                        ]
                    }
                }
            ]
        },
        {
            test:/\.less$/,
            loader:"style-loader!css-loader!postcss-loader!less-loader"
        },
        {
            test:/\.sass$/,
            loader:"style-loader!css-loader!postcss-loader!sass-loader"
        },
        {
            test:/\.html$/,
            loader:"html-loader"
        },
        /*{
            test:/\.(jpg|png)$/i,
            loader:"file-loader",
            options:{
                name:'assets/[name]-[hash:5].[ext]'
            }
        },*/
        /*{
            test:/\.(jpg|png)$/i,
            loader:"url-loader",
            options:{
                limit: 50000,  //k
                name:'assets/[name]-[hash:5].[ext]',
            }
        }*/
        {
            test:/\.(jpg|png)$/i,
            loaders:[  //loaders指定一系列的loader ,参数以get的方式拼接
                "url-loader?limit=10000&name=assets/[name]-[hash:5].[ext]",
                "image-webpack-loader"
            ]
        }

      ]
    }
}