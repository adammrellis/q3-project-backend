exports.up = function(knex, Promise) {
    return knex.schema.createTable('locations', table => {
        table.increments();
        table.string('name').notNullable();
        table.string('address').notNullable();
        table.timestamps(true, true);
    })
}

exports.down = function(knex) {
    return knex.schema.dropTable("locations")
};