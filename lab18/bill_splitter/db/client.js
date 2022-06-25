const config = require('../knexfile');
const knex = require('knex');
const environment = config.development;
const connection = knex(environment);
module.exports = connection;
