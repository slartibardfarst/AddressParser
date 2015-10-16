'use strict';

var url = require('url');

//var Default = require('./DefaultService');
var Parser = require('./ParserService');

module.exports.parse = function parse (req, res, next) {
  var query = req.swagger.params['query'].value;
  var clientId = req.swagger.params['client_id'].value;
  

  //var result = Default.parse(query, clientId);
  var result = Parser.parse(query, clientId);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};
