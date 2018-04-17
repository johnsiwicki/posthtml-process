var posthtml = require('posthtml');
const postcss = require('posthtml-postcss');
const postcssPlugins = [
  require('autoprefixer')({ browsers: ['last 2 versions'] })
]
const postcssOptions = {};
const filterType = /^text\/css$/;

module.exports = function (context,cb) {
  
  const bEmail = context.body.email;
  const result = posthtml(
      [
        require('posthtml-custom-elements')()
      ]
      
      [ postcss(postcssPlugins, postcssOptions, filterType) ]
      
      )
    .process(bEmail, { sync: true })
    .html;
  
    cb(null, {result});
  
};

