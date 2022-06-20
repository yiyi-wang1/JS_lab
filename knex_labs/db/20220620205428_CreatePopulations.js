/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('populations', table => {
        table.bigIncrements('id').primary();
        table.integer('year');
        table.integer('quantity');
        table.bigint('country_id').notNullable().references('id').inTable('countries');

    })

};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable('populations');
};
