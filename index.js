var posthtml = require('posthtml');
var customelements = require('posthtml-custom-elements');
var collectInlineStyles  = require('posthtml-collect-inline-styles');

module.exports = function (context,cb) {
  
  const bEmail = context.body.email;
  const result = posthtml()
    .use( collectInlineStyles)
    .use( customelements)
    .process(bEmail, { sync: true })
    .html;
  
    cb(null, {result});
  
};

