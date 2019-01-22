var express = require('express');
var routes = require('./routes');
var api = require('./api/api');

var app = express();
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

routes(app);
api(app);
app.set('views', './src/vue/pages');
app.use('/', express.static('react-ui/dist'));


app.listen(3000, function () {
    console.log('✔ Express server listening connected listening on: 3000');
});
