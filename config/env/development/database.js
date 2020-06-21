module.exports = ({ env }) => ({
    defaultConnection: 'default',
    connections: {
      default: {
        connector: 'mongoose',
        settings: {
          uri: env('DATABASE_URI'),
        },
        options: {
          authenticationDatabase: env('AUTHENTICATION_DATABASE', 'admin'),
          ssl: env.bool('DATABASE_SSL', true),
        },
      },
    },
  });
  