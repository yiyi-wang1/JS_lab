const knex = require('./client');

// Find all countries whose names begin with "b" ignoring case.
knex.select('*').from('countries').where('name', 'ilike', 'b%').then(data => {
    console.log(data);
    knex.destroy();
})
// //Count how many countries have "central" in their name.
knex.count('*').from('countries').where('name', 'ilike', '%central%').then(data => {
    console.log(data);
    knex.destroy();
})
//Find all countries whose names begin with the same three letters as their code ignoring case.
knex.select('*').from('countries').whereRaw(`"name" ilike "code" || '%'`).then(data => {
    console.log(data);
    knex.destroy();
})
