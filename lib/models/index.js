'use strict';

// import `sequelize` and `DataTypes`

// set `DATABASE_URL`  to be either the database URL in the .env, or to be "sqlite:memory", to be a sql server that runs in memory
// use "sqlite::memory" (double colons), so that the `memory` file doesn't persist after testing

// make a messageSchema variable that's required from the messages.js

// declare a `sequelize` variable as a new instance of the Sequelize class

// declare a MessagesModel as a new instance of the messageSchema


module.exports =
{
  // export the messages schema
  Messages: MessagesModel,
  // export a sql table
  db: sequelize,
}
