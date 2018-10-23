import Joi from 'joi';

const URLBACKEND = 'http://localhost:8880/';
const request = require('request');

export function addElement(type, id, userIdAsCookieValue){
    request(URLBACKEND + 'kibana/' + type + "/"+ id , { json: true }, (err, res, body) => {
          if (err) { return console.log(err); }
            console.log(body.url);
            console.log(body.explanation);
    });
}

