
exports.up = (knex) => {

    return knex.schema

        .createTable('contacts', table => {
            table.increments('id').primary();
            table.string('name');
            table.string('email');
            table.string('address');
        })

        .createTable('phone_numbers', table => {
            table.increments('id').primary();

            table
                .integer('contactId')
                .unsigned()
                .references('id')
                .inTable('contacts')
                .onDelete('CASCADE')
                .index();

            table.string('value');
            table.string('kind');
        });

};

exports.down = (knex) => {

    return knex.schema
    .dropTableIfExists('phone_numbers')
    .dropTableIfExists('contacts');

};
