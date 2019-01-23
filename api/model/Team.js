import knex from './database';
import Tournament from './Tournaments'
import Participant from "./Participant";

class Team {
    static getById(team) {
        return knex.from('teams').select('*')
            .where('id', '=', team)
            .then((rows) => {
                if (rows.length === 0)
                    return false;
                else
                    return rows[0];
            });
    }
}


export default Team;
