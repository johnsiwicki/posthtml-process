const posthtml = require('posthtml');

const postPlugins = [
  require('posthtml-custom-elements')(),
  require('posthtml-minifier')()
];
 

module.exports = function (context,cb) {
  
  const bEmail = context.body.email;
  const result =  
  posthtml([
		postPlugins
	])
    .process(bEmail, { sync: true })
    .html;
    
    cb(null, {result});
  
};

