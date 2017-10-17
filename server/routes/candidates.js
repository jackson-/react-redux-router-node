'use strict'

const db = require('APP/db')

const {mustBeLoggedIn, forbidden} = require('./auth.filters')

module.exports = require('express').Router()
  .get('/',
    (req, res, next) => {
      db.select().from('candidates').timeout(1000)
      .then((rows) => {
        return res.status(200).json(rows)
      })
    })
  .post('/',
    (req, res, next) => {
      db('candidates').insert(req.body)
      .then((result) => {
        return res.status(201).json(result)
      })
    })
  .post('/skills/:id',
    (req, res, next) => {
      console.log("BODY", req.body)
      db('candidates').insert(req.body)
      .then((result) => {
        return res.status(201).json(result)
      })
    })
  .post('/columns',
    (req, res, next) => {
      db.schema.table('candidates', function (table) {
        table.string(req.body.name);
      })
      .then((result) => {
        res.status(200).json(result);
      })
    })
  .delete('/columns',
    (req, res, next) => {
      db.schema.table('candidates', (table) => {
        table.dropColumns(req.body.columns)
      })
      .then((result) => {
        res.status(200).json(result);
      })
    })
  .delete('/:id',
    (req, res, next) => {
      db('candidates').where('id', req.params.id).del()
      .then((result) => {
        return res.status(201).json(result)
      })
    })
