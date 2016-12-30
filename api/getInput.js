const Q       = require('q');
const lib     = require('../lib/functions.js');
const request = require('request');

module.exports = (req, res) => {
    const defered = Q.defer();

    req.body.args = lib.clearArgs(req.body.args);

    let { 
        accessToken,
        id
    } = req.body.args;
        
    let required = lib.parseReq({accessToken, id});

    if(required.length > 0) 
        throw new RapidError('REQUIRED_FIELDS', required);
    
    request({
        uri: 'https://api.clarifai.com/v2/inputs/' + id,
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + accessToken
        }
    }, (err, response, reslut) => {
        if(!err && (/20.*/).test(response.statusCode))  
            defered.resolve(lib.safeParse(reslut));
        else 
            defered.reject(lib.safeParse(err || reslut || response.statusCode));
    });

    return defered.promise;    
}