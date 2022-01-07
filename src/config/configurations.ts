export default () => ({
  database: {
    dialect: process.env.DATABASE_DIALECT,
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
  },
  jwt: {
    secret: process.env.JWT_SECRET,
    signOptions: {
      algorithm: process.env.JWT_ALGORITHM,
    },
  },
  multerDest: './uploads',
  enableLogs: process.env.ENABLE_LOGS ?? false,
});
