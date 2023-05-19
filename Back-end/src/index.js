const server = require('./app');
const PORT = 3001;
const { conn } = require('./DB_connection');

conn.sync({ force: false })
  .then(() => {
    server.listen(PORT, () => {
      console.log('Server raised on port: ' + PORT);
    });
  })
  .catch((error) => {
    console.error('Error synchronizing Sequelize:', error);
  });