const knex = require('./database');

class Participant {
    static async getFromId(userId) {
        return knex.schema
    }

    static getAll() {
        return knex.from('registered').select('*')
    }

    static getById(id) {
        return knex.from('registered')
            .select('*')
            .where('id', '=', id)
            .then((rows) => {
                if (rows.length === 0)
                    return false;
                else
                    return rows[0];
            })
    }

    static getByTeam(team) {
        return knex.from('registered').select('*').where('team', '=', team)
    }

    static getTeamById(id) {
        return knex
            .from('registered')
            .select('team')
            .where('id', '=', id)
            .then((rows) => {
                if (rows.length === 0)
                    return false;
                else
                    return rows[0];
            })
    }

    static authorizedKeys = [
        "name",
        "firstname",
        "email",
        "nom_resp",
        "date_naissance",
        "sexe",
        "code_postal",
        "adresse",
        "ville_etabl",
        "nom_etabl",
        "classe",
        "coord_resp"
    ];

    static updatable(participant) {
        let res = {};
        participant.keys
            .reduce((k) => (this.authorizedKeys.indexOf(k) > -1))
            .forEach((item) => {
                res[item] = participant[item]
            });
        return res;
    }

    static alterById(participant) {
        return knex('registered')
            .where('id', '=', participant.id)
            .update(Participant.updatable(participant))
            .then((rows) => {
                if (rows.length === 0)
                    return false;
                else
                    return rows[0];
            });
    }

    static createById(participant) {
        return knex('registered')
            .insert(participant)
            .then((rows) => {
                if (rows.length === 0)
                    return false;
                else
                    return rows[0];
            })
    }
}


export default Participant;
