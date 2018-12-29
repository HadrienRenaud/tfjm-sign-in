let login = function (req, res) {
    res.status(200).end();
};


module.exports = function (app) {
    app.get('/api/login', login);
};


