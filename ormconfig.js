const config = [
  {
    name: 'default',
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'test',
    password: 'test',
    database: 'test',
    synchronize: false,
    logging: ['query', 'error'],
    entities: ['src/entities/**/*.ts'],
    migrations: ['/migrations/*.ts'],
    subscribers: ['src/subscribers/**/*.ts'],
    seeds: ['src/migrations/seeds/**/*.ts'],
    factories: ['src/migrations/factories/**/*.ts'],
    cli: {
      entitiesDir: 'src/entities',
      migrationsDir: 'src/migrations',
      subscribersDir: 'src/subscribers'
    }
  }
];

module.exports = config;
