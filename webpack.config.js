var path = require('path');
module.exports = {
  mode:'development',
    entry: './public/mainapp.js',
    output: {
        path:__dirname,
      filename: 'public/bundle.js'
    },
    resolve:{
    
    
      alias:{
        weathermain: path.resolve(__dirname, 'public/components/weathermain.js'),
        weatherform: path.resolve(__dirname, 'public/components/weatherform.js'),
        weathermsg: path.resolve(__dirname, 'public/components/weathermsg.js'),
        api: path.resolve(__dirname,'public/api/weatherapi.js')



        
      },
      extensions:['.js']
    },
    module: {
      rules: [
        {
          test: /\.js?$/,
          exclude: /(node_modules)/,
          use: {
            loader: "babel-loader",
            query:{
              presets:["react","es2015"]
            }
          }
        }
      ]
    }
  };
