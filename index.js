'use strict';

const {Redcli} = require('./lib/redcli');

console.log(Redcli);

try {
  const cli = new Redcli();
  
  cli.start();
} catch (error) {
  console.log(error);
}

