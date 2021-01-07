module.exports = {

    port: 80,

    jwt: {
        algo: "HS256",
        secret: "prodsecret",
        lifetime: { months: 1 }
    },

    db: {
        database: 'phone_book_prod',
        user:     'teq',
        password: 'fd479c7dd9af'
    }

};
