// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'contact-me',
      username: 'nimbus-user',
      password: '123'
    },
    migrations: {
      tableName: 'migrations',
      directory: './db/migrations'
    }
  }
};
