const TABLES = {
    tournaments: "tournaments",
    organizers: "organizers",
    registered: "registered",
    supervisors: "supervisors",
    teams: "teams",
    tournaments_organizers: "tournaments_organizers"
}

exports.up = function (knex, Promise) {
    return Promise.all([

        knex.schema.createTable(TABLES.tournaments, function (table) {
            table.increments('id').primary();
            table.string('name').notNull();
            table.date('begin_date');
            table.date('end_date');
            table.text('description');
            table.date('limit_date_signin');
            table.date('limit_date_def');
            table.date('limit_date_nds');
            table.integer('max_team_validees');
        }),

        knex.schema.createTable(TABLES.teams, function (table) {
            table.increments('id').primary();
            table.string('name');
            table.string('email').notNull();
            table.string('trigramme');
            table.text('motivation_text');
            table.string('motivation_file');
            table.string('password').notNull();
            table.integer('tournament').references('id').inTable(TABLES.tournaments);
        }),

        knex.schema.createTable(TABLES.registered, function (table) {
            table.increments('id').primary();
            table.string('name');
            table.string('firstname');
            table.string('email');
            table.string('nom_resp');
            table.date('date_naissance');
            table.boolean('sexe');
            table.integer('code_postal');
            table.string('adresse');
            table.string('ville_etabl');
            table.string('nom_etabl');
            table.string('classe');
            table.string('coord_resp');
            table.integer('team').references('id').inTable(TABLES.teams);
        }),

        knex.schema.createTable('supervisors', function (table) {
            table.increments('id').primary();
            table.string('name');
            table.string('firstname');
            table.string('email');
            table.string('profession');
            table.boolean('presence');
            table.integer('team').references('id').inTable(TABLES.teams);
        }),

        knex.schema.createTable('organizers', function (table) {
            table.increments('id').primary();
            table.string('name');
            table.string('firstname');
            table.string('email');
        }),


        knex.schema.createTable('tournaments_organizers', function (table) {
            table.increments('id').primary();
            table.integer('tournament').references('id').inTable(TABLES.tournaments);
            table.integer('organizer').references('id').inTable(TABLES.organizers);
        }),

    ])
};

exports.down = function (knex, Promise) {
    return Promise.all(
        TABLES.values().forEach(
            table => {
                knex.schema.dropTableIfExists(table)
            }
        )
    );
};
