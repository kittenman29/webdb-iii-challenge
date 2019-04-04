
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cohorts').truncate() // resets the primary key in addition to cleaning the table
    .then(function () {
      // Inserts seed entries
      return knex('cohorts').insert([
        {name: 'Data Science 1'},
        {name: 'Full Stack Web 16'},
        {name: 'iOS 4'}
      ]);
    });
};
