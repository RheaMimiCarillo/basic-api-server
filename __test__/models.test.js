'use strict';

// import `Messages` and `db` from index js (with require)


// `beforeAll()`, built-in method on a sequelize instance that can go ahead and create the tables and such, so that we don't error out by trying to do table stuff without a table

// make a test to create a single message
// use `describe` and `test` with async and await
// use `expect` to make the message.id and message.text to === the same as the values that we passed in



// create a test to read from the messages table
// `expect` the message.length `!.toBeTruthy`


// create test to update a single message (`Messages.update( {text: "updated texttttttt!" }, {where: { id: 1}} )
// `expect` message.text to .toEqual the the test string

// create test to delete a message
// Messages.destroy( {where: { id: 1} } )
