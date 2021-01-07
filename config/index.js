
const env = process.env.ENV || 'development';

module.exports = require(`./${env}.js`);
