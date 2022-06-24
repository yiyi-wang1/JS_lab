const faker = require('faker');
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('posts').del().then(function () {
    const posts = Array.from({ length: 1000 }).map(() => {
      return {
        title: faker.company.catchPhrase(),
        content: faker.lorem.paragraph(),
        image_url: faker.image.imageUrl(),
        view_count: Math.floor(Math.random() * 100),
        created_at: faker.date.past()
      }
    })
    return knex('posts').insert(posts)
  })
};
