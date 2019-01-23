var dbConfig = require('../../config.js');
var env = 'development';

var config = {
    development: {
        connection: dbConfig,
        client: "mysql"
    }
}

var knex = require('knex')(config[env]);

module.exports = knex;

knex.migrate.latest([config]);
