
exports.up = function(knex, Promise) {
  return knex.schema.createTable('candidates', table => {
        table.increments('id').primary();
        table.string('first_name');
        table.string('last_name');
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('candidates');
};
