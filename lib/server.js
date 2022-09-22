'use strict';

// require express 

// declare app = express() variable

// make an instance of express() called 'app;

// app.use express.json()

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
