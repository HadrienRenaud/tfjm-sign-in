const config = require('../../../config.js').mysql;
const util = require('util');

const mysql = require('mysql');

// Thanks to Michał Męciński for explanning how to do that in his article :
// https://codeburst.io/node-js-mysql-and-promises-4c3be599909b

class Database {
    constructor(config) {
        this.connection = mysql.createConnection(config);
    }

    query(sql, args) {
        return new Promise((resolve, reject) => {
            this.connection.query(sql, args, (err, rows) => {
                if (err)
                    return reject(err);
                resolve(rows);
            });
        });
    }

    close() {
        return new Promise((resolve, reject) => {
            this.connection.end(err => {
                if (err)
                    return reject(err);
                resolve();
            });
        });
    }

    static dbQuery(callback) {
        const db = new Database(config);
        return callback(db).then(
            result => db.close().then(() => result),
            err => db.close().then(() => {
                throw err;
            })
        )
    }
}


Database.dbQuery(
    db => db.query('SELECT 1 + 1 AS solution').then(
        rows => {
            console.log('Good initialization of the connexion.');
        }
    ).catch(
        reason => {
            console.log("Cannot start connexion : ", reason);
        }
    )
);

module.exports = Database.dbQuery;
