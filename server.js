const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const port = process.env.PORT || 8000
const cors = require('cors')
const logger = require('morgan')
const { Model } = require('objection')
const knex = require('./db/knex')

const locations = require('./routes/locations')
const guitars = require('./routes/guitars')

Model.knex(knex)

const app = express()

app.use(logger('dev'))
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/locations', locations)
app.use('/guitars', guitars)

module.exports = {app}