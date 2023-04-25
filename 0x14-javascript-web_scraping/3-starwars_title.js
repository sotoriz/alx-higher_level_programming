#!/usr/bin/node

const request = require('request');
const URL = 'https://swapi-api.alx-tools.com/api/films/:id';
const episode = process.argv[2];

request(URL + episode, function (error, response, body) {
  error && console.log(error);
  console.log(JSON.parse(body).title);
});
