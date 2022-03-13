const path = require('path');

module.exports = ({ env }) => ({
  defaultConnection: "default",
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", "localhost"),
      port: env.int("DATABASE_PORT", 5432),
      database: env("DATABASE_NAME", "strapi_db"),
      username: env("DATABASE_USERNAME", "strapi"),
      password: env("DATABASE_PASSWORD", "N33d2wrk"),
      schema: env("DATABASE_SCHEMA", "public"),
    },
  }
});
