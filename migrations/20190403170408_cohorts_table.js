// what new changes we need to make
exports.up = function(knex) {
  return knex.schema.createTable('cohorts', function(tbl) {
      // primary key, called id and make it auto-increment
      tbl.increments();

      tbl.text('name', 128).notNullable().unique();
  })
};

// how to undo the changes made in the up function
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cohorts');
};
