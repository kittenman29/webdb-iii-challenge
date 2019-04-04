const express = require('express');
const helmet = require('helmet');

const cohortsRouter = require('./routers/cohorts-router.js');
const studentsRouter = require('./routers/students-router.js');

const server = express();

server.use(express.json());
server.use(helmet());

// endpoints here

server.use('/api/cohorts', cohortsRouter);
server.use('/api/students', studentsRouter);

const port = 5000;
server.listen(port, function() {
  console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
});
