/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex, Promise) {
    return knex.schema.table('actors_rival_Chuck_Norris', function(t) {
        t.integer('fight skills').notNull().defaultTo(0);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.down = function(knex, Promise) {
    return knex.schema.table('actors_rival_Chuck_Norris', function(t) {
        t.dropIndex([ 'fight skills' ]);
    });
};