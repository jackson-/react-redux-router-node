'use strict'

const app = require('APP')
const debug = require('debug')(`${app.name}:db`) // DEBUG=your_app_name:db
const chalk = require('chalk')
const Sequelize = require('sequelize')

const name = (app.env.DATABASE_NAME || app.name) + (app.isTesting ? '_test' : '')
const db = require('knex')({
  client: 'pg',
  connection: app.env.DATABASE_URL || `postgres://localhost:5432/${name}`,
  searchPath: 'knex,public'
});
debug(chalk.yellow(`Opened database connection to ${name}`))
module.exports = db;
