/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

const faker = require('faker');

exports.seed = function (knex) {
  return knex('posts').del()
    .then(function () {
      //insert into posts
      const posts = Array.from({ length: 1000 }).map(() => {
        return {
          title: faker.company.catchPhrase(),
          content: faker.lorem.paragraph(),
          imageUrl: faker.image.imageUrl(),
          createdAt: faker.date.past()
        }
      })
      return knex('posts').insert(posts);
    })
};
