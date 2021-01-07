module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      database: 'phone_book_dev',
      user:     'postgres',
      password: '1234'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'phone_book_prod',
      user:     'postgres',
      password: '1234'
    }
  }

};
