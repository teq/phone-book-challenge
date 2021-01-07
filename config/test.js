module.exports = {

    port: 3001,

    jwt: {
        algo: "HS256",
        secret: "devsecret",
        lifetime: { months: 1 }
    },

    db: {
        database: 'phone_book_test',
        user:     'teq',
        password: '1234'
    }

};
