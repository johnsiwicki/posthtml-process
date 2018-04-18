const posthtml = require('posthtml');

module.exports = function (context,cb) {
  
  const bEmail = context.body.email;
  const result =  
        posthtml([
      		require('posthtml-custom-elements')(),
          require('posthtml-minifier')()
      	]).process(bEmail, { sync: true })
          .html;
    
    cb(null, {result});
  
};

