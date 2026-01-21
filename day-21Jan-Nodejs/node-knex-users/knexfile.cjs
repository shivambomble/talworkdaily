/** @type {import('knex').Knex.Config} */
module.exports = {
  development: {
    client: "pg",
    connection: {
      host: "localhost",      // or your container host
      port: 3005,             // default Postgres port
      user: "postgres",       // your DB user
      password: "myseceretpassword",   // your DB password
      database: "test"        // your DB name
    },
    migrations: {
      directory: "./migrations"
    }
  }
};
