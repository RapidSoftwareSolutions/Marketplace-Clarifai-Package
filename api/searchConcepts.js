const Q       = require('q');
const lib     = require('../lib/functions.js');
const request = require('request');

module.exports = (req, res) => {
    const defered = Q.defer();

    req.body.args = lib.clearArgs(req.body.args);

    let { 
        apiKey,
        name
    } = req.body.args;

    let required = lib.parseReq({apiKey, name});

    if(required.length > 0) 
        throw new RapidError('REQUIRED_FIELDS', required);
    
    request({
        uri: 'https://api.clarifai.com/v2/concepts/searches',
        method: 'POST',
        headers: {
            'Authorization': 'Key ' + apiKey
        },
        json: {
            concept_query: {name}  
        }
    }, (err, response, reslut) => {
        if(!err && (/20.*/).test(response.statusCode))  
            defered.resolve(lib.safeParse(reslut));
        else 
            defered.reject(lib.safeParse(err || reslut || response.statusCode));
    });

    return defered.promise;

    
}