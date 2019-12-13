exports.up = function(knex, Promise) {
    return knex.schema.createTable('guitars', table => {
        table.increments();
        table.string('make').notNullable();
        table.string('model').notNullable();
        table.integer('year').notNullable();
        table.string('color').notNullable();
        table.string('pickups').notNullable();
        table.integer('price').notNullable();
        table.integer('condition').notNullable();
        table.integer('location_id')
            .references('id')
            .inTable('locations')
            .onDelete('CASCADE');
        table.string('image').notNullable();
        table.timestamps(true, true);
    })
}

exports.down = function(knex) {
    return knex.schema.dropTable("guitars")
};