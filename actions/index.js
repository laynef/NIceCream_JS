#! /usr/bin/env node

var StartUp = require('./startup/StartUp.js');

var user = process.argv.slice(2);

var args = [], flags = [];

for (var i = 1; i < user.length; i++) {
  if (user[i].indexOf('--') === 0) {
    flags.push(user[i]);
  } else {
    args.push(user[i]);
  }
}

var start = new StartUp(user[0], args, flags);

start.execute();
