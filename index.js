var posthtml = require('posthtml');
var customelements = require('posthtml-custom-elements');
var collectInlineStyles  = require('posthtml-collect-inline-styles');

module.exports = function (context,cb) {
  
  const bEmail = context.body.email;
  const result = posthtml(
      [
        require('posthtml-custom-elements')(),
       // require('posthtml-classes')()
      ])
    .process(bEmail, { sync: false })
    .html;
  
    cb(null, {result});
  
};

