module.exports={
	// __dirname是nodejs里的一个全局变量，它指向的是我们项目的根目录
	entry:__dirname+'/src/script/main.js',//入口文件
	output:{
		path:__dirname+'/dist/js',//打包后输出目录
		filename:'bundle.js'//打包后输出的文件
	},
	module:{
		loaders:[
			{
			 test:/\.json$/,// 匹配loaders所处理的文件的拓展名的正则表达式
			 loader:"json"
			}
		]
	}
}


