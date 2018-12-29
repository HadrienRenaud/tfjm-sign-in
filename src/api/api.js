let login = function (req, res) {
    res.redirect('/').end();
};


module.exports = function (app) {
    app.get('/api/login', login);
};


