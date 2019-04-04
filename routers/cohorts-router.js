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

router.post('/', (req, res) => {
  db('cohorts')
  .insert(req.body)
  .then(ids => {
      const[id] = ids
      db('cohorts')
      .where({id})
      .first()
      .then(cohorts => {
          res.status(200).json(cohorts)
      })
  })
  .catch(error => {
      res.status(500).json(error)
  })
});

router.get('/', (req, res) => {
db('cohorts')
.then(cohorts => {
  res.status(200).json(cohorts)
})
.catch(error => {
  res.status(500).json(error)
})
});


module.exports = router;