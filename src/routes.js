module.exports = function(server) {
    // Defining all the routes

    // Login
    server.get('/login', function (req, res) {
        res.render('login.html');
    });

    // Home
    server.get('/', function (req, res) {
        res.render('home.html');
    })
};
