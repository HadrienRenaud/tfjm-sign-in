const Participant = require('./model/Participant');

let login = async function login(req, res) {
    Participant.getAll()
        .then(
            rows => {
                res.write("Participants : ", rows.toString());
                res.end();
            })
        .catch(
            err => {
                res.write("Error : ", err.toString());
                res.end();
            });
};


module.exports = function (app) {
    app.get('/api/login', login);
};


