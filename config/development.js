module.exports = {

    port: 3000,

    jwt: {
        algo: "HS256",
        secret: "devsecret",
        lifetime: { months: 1 }
    },

    db: {
        database: 'phone_book_dev',
        user:     'teq',
        password: '1234'
    }

};
