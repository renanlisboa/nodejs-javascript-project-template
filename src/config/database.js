module.exports = {
  dialect: 'ex: postgres',
  host: 'localhost',
  username: 'database_username',
  password: 'database_password',
  database: 'database_name',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
