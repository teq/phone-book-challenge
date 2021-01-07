const config = require('./config');

module.exports = {
  client: 'postgresql',
  connection: config.db
};
