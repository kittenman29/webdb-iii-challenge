const router = require('express').Router();
const knex = require('knex');

const knexConfig = {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './data/rolex.db3'
    }
  }
  
  const db = knex(knexConfig);

module.exports = router;