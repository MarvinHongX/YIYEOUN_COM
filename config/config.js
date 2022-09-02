const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    db: {
        host: process.env.DATABASE_HOST,
        port: process.env.DATABASE_PORT,
        user: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_DATABASE
    },
    web: {
        port: process.env.WEB_PORT
    }
};

