'use strict'


// bring in express
const express = require('express');

// bring in just the Coffee object we exported from server.js
const { Coffee } = require('../models');

// instead of creating an `app`, we're creating a `router`
// we can attach this router to our sequelize singleton
const router = express.Router();


// lab requires 5 routes:
// 2 gets, 1 post, and 1 delete

// get all 
router.get('/coffee', (req, res, next) => 
{
  res.send('work in progress')
});

// get one coffee record, by `id`
router.get('/coffee:id', (req, res, next) => res.send('wip'));

// make a new record
router.post('/coffee', (req, res, next) => res.send('wip'));

// update a record, by `id`
router.put('/coffee:id', (req, res, next) => res.send('wip'));

// delete a record, by `id`
router.delete('/coffee:id', (req, res, next) => res.send('wip'));


// standalone callbacks, so things are compartmentalized

async function readCoffee(req, res, next)
{
  let coffeeRecords = await Coffee.findAll();
  res.status(200).send(coffeeRecords);
}

async function createCoffee(req, res, next)
{
  // create a coffee record from the request's body
  let coffeeRecord = await Coffee.create(req.body);

  // set status as 200 and send the created coffee record to the client
  res.status(200).send(coffeeRecord);
}

//module.exports = ;
