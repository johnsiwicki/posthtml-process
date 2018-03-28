var express    = require('express');
var Webtask    = require('webtask-tools');
var bodyParser = require('body-parser');
var posthtml = require('posthtml');
var app = express();

app.use(bodyParser.json());

app.post('/', function (context, cb, req, res) {
    const bEmail = context.body.email;
    
  const result = posthtml()
  .use(require('posthtml-custom-elements')())
  .process(bEmail, { sync: true })
  .html

console.log(result)
    
        
});

module.exports = Webtask.fromExpress(app);
