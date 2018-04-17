const posthtml = require('posthtml');
 
const postPlugins = [
  require('posthtml-custom-elements')()
];
 

module.exports = function (context,cb) {
  
  const bEmail = context.body.email;
  const result = posthtml(
      [
       require('posthtml-custom-elements')()
      ] 
      )
    .process(bEmail, { sync: true })
    .html;
    
    cb(null, {result});
  
};

