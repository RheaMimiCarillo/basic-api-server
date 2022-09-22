'use strict';

// require express 
'use strict'


// bring in express
const express = require('express');

// instead of creating an `app`, we're creating a `router`
// we can attach this router to our sequelize singleton
const app = express();

// import coffee router
const coffeeRouter = require('./routes/coffee.js');



// declare app = express() variable

// make an instance of express() called 'app;

// import json thing to attach JSON body to the `request` body
app.use(express.json());

// use the coffee router and have the coffee router itself specify the endpoints
app.use(coffeeRouter);

// make a app.post /message endpoint
// this function makes a new record in the database

// export the app
module.exports = {
  start: (port) =>
  {
    app.listen(port, () =>
    {
      console.log('listening on port: ' + port);
    })
  },
  app,
}
