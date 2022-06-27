const config = require('../knexfile');
const environment = config.development;
const knex = require('knex');

const connection = knex(environment);

module.exports = connection;