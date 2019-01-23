import knex from "./database"

class Tournament {

    static getAll() {
        return knex
            .from('tournaments').select('*');
    }

    static getById(id) {
        return knex.from('tournaments').select('*').then((rows) => {
            if (rows.length === 0)
                return false;
            else
                return rows[0];
        });
    }

    static getAllTeams(id) {
        return knex
            .from('teams').select('*')
            .where("tournament", '=', id)
    }

    static countAllTeams(id) {
        return knex
            .from('teams').select('id')
            .where("tournament", '=', id)
            .count('*')
            .then((rows) => {
                if (rows.length === 0)
                    return false;
                else
                    return rows[0];
            })
    }
}

export default Tournament;
