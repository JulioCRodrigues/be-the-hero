const knex = require('knex'); //Calculing...
const configuration = require('../../knexfile');

const connection = knex(configuration.development);

module.exports = connection;