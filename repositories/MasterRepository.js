const config = require('../config/config');
const mariadb = require('mariadb');
const GenericRepository = require('./GenericRepository');

const pool = mariadb.createPool(
    config['db']
);


module.exports.execute = async (query, params) => {
    return GenericRepository.execute(query, params, pool);
};