 
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        { description: 'CHILL', notes: 'NOICEE..', project_id: 1 },
        { description: 'TAKE A JOG', notes: 'DONT BREAK NOTHING', project_id: 1 },
        { description: 'THINK WITH YOUR MIND', notes: 'FFEGJJETJTJESJT...OH SRRY', project_id: 1 },
        { description: 'TOST', notes: 'MILOST', project_id: 2 },
        { description: 'CODE N PASS OUT', notes: 'THE GOVT WANTS TO STOP CODERS IN THERE TRACKS', project_id: 2 },
        { description: 'HUAWAII....HMM I SPELLED THAT WRONG HUH', notes: 'WISHY WASHY', project_id: 3 }
      ]);
    });
};
