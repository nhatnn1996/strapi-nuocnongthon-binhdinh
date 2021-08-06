module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        host: env('DATABASE_HOST', 'http://103.137.185.86'),
        srv: env.bool('DATABASE_SRV', false),
        port: env.int('DATABASE_PORT', 27017),
        database: env('DATABASE_NAME', 'blog-binhdinh'),
        username: env('DATABASE_USERNAME', null),
        password: env('DATABASE_PASSWORD', null),
      },
      options: {
        authenticationDatabase: env('AUTHENTICATION_DATABASE', 'blog-dinhdinh'),
        ssl: env.bool('DATABASE_SSL', false),
      },
    },
  },
});
