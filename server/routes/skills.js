'use strict'

const db = require('APP/db')

const {mustBeLoggedIn, forbidden} = require('./auth.filters')

module.exports = require('express').Router()
  .get('/',
    (req, res, next) => {
      db.select().from('skills').timeout(1000)
        .then((rows) => {
          return res.status(200).json(rows)
        })
    })
  .post('/',
    (req, res, next) => {
      db('skills').insert(req.body)
        .then((result) => {
          return res.status(201).json(result)
        })
      })
  .put('/',
    (req, res, next) => {
      db('candidates').where('title', req.body.title).update(req.body)
        .then((result) => {
          return res.status(201).json(result)
        })
      })
  .delete('/:id',
    (req, res, next) => {
      db('skills').where('id', req.params.id).del()
        .then((result) => {
          return res.status(201).json(result)
        })
      })
