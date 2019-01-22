const dbQuery = require('./database');

class Participant {
    static async getFromId(userId) {
        try {
            let res = await dbQuery("SELECT * FROM participants WHERE id = ?", [userId]);
            console.log(res);
        } catch (e) {
            console.log(e);
        }
    }

    static async getAll() {
        return dbQuery(
                db => db.query("Select * from participants")
                    .then(
                        rows => {
                            console.log("first : ", rows);
                            return rows;
                        })
                    .catch(
                        reason => {
                            console.log("Error : ", reason);
                            return reason.toString();
                        }
                    )
            );
    }
}


module.exports = Participant;
