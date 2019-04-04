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

router.get('/:id', (req, res) => {
  const {id} = req.params
  db('cohorts')
  .where({id})
  .first()
  .then(cohorts => {
      if(cohorts) {
          res.status(200).json(cohorts)
      } else {
          res.status(404).json({message: "Cohort not found"})
      }
  })
  .catch(error => {
      res.status(500).json(error)
  })
});

router.put('/:id', (req, res) => {
  db('cohorts')
      .where({id: req.params.id})
      .update(req.body)
      .then(count => {
          if(count>0) {
              db('cohorts')
              .where({id: req.params.id})
              .first()
              .then(cohorts => {
                  res.status(200).json(cohorts)
              })
          } else {
              res.status(404).json({error: 'Cohort not found for update'})
          }
      })
      .catch(error => {
          res.status(500).json(error)
      })
})

router.delete('/:id', (req, res) => {
  const {id} = req.params
  db('cohorts')
  .where({id})
  .del()
  .then(count => {
    if(count>0) {
      res.status(204).end()
    } else {
      res.status(404).json({error: 'Could not delete cohort please check id entered'})
    }
  })
  .catch(error => {
    res.status(500).json(error)
  })
});


module.exports = router;