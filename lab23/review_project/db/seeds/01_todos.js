const faker = require('faker');

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  return knex('todos').del().then(() => {
    const todos = [];
    for (let i = 0; i < 100; i++) {
      todos.push({
        title: faker.hacker.verb(),
        content: faker.company.catchPhrase(),
        imageUrl: faker.image.imageUrl()
      })
    }
    return knex('todos').insert(todos);
  })
};
