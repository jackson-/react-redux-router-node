'use strict'

const api = require('express').Router()

module.exports = api
  .use('/auth', require('./routes/auth'))
  .use('/candidates', require('./routes/candidates'))
  .use('/skills', require('./routes/skills'))
  .use((req, res) => res.status(404).end()) // No routes matched? 404.
