
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        { name: 'Pens', description: '2000 Pens just for you ;)' },
        { name: 'Computers', description: 'Only 1 pc.. our company is broke sorry.' },
        { name: 'Books', description: 'words blah blah blah' }
      ]);
    });
};
