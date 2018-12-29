var express = require('express');
var routes = require('./routes');

var app = express();
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

routes(app);
app.set('views', './src/vue/pages');
app.use('/dist', express.static('dist'));


app.listen(3000, function () {
    console.log('✔ Express server listening connected listening on: 3000');
});
