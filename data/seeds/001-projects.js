 
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        { name: 'code', description: 'bro down' },
        { name: 'AAHHHHH!!!', description: 'chill' },
        { name: 'THIS IS GUY SCREAMING FROM MY SUBCONCIOUS', description: ' I NEEED SLEEEP!!!!' }
      ]);
    });
};
