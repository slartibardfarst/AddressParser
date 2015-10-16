'use strict';

var addressit = require('addressit');

exports.parse = function (query, clientId) {

  var start = new Date();
  var components = addressit(query);
  var finish = new Date();

  var examples = {};

  examples['application/json'] = [{
    "took" : (finish.getTime() - start.getTime()),
    "parseType": "street",
    "address": {
      formattedFullAddress: components.text,
      formattedAddressLine: components.number + ' ' + components.street,
      "streetNumber": components.number,
      "streetName": components.street,
      //"unit": "aeiou",
      //"predirectional": "aeiou",
      //"postdirectional": "aeiou",
      //"city": "aeiou",
      //"streetSuffix": "aeiou",
      "stateCode": components.state
      //"zip": "aeiou",
      //"zipPlusFour": "aeiou",          
    }
  }];

  if (Object.keys(examples).length > 0)
    return examples[Object.keys(examples)[0]];

}
