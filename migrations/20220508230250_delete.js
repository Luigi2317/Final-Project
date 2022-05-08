/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex, Promise) {
    return knex.schema.table('martial_arts_Chuck_Norris', function(t) {
        t.dropColumn('martials_arts_position');
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex, Promise) {
    return knex.schema.table('products', function(t) {
        t.enum('martial_arts_position', ['1', '2', '3','4']).notNull();
    });
};

