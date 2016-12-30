const Q       = require('q');
const lib     = require('../lib/functions.js');
const request = require('request');

module.exports = (req, res) => {
    const defered = Q.defer();

    req.body.args = lib.clearArgs(req.body.args);

    let { 
        accessToken,
        inputs
    } = req.body.args;
        
    let required = lib.parseReq({accessToken, inputs});

    if(required.length > 0) 
        throw new RapidError('REQUIRED_FIELDS', required);

    if(typeof inputs == 'string') {
        try {
            inputs = JSON.parse(inputs);
        } catch(e) {
            throw new RapidError('JSON_VALIDATION')
        }
    }
    
    request({
        uri: 'https://api.clarifai.com/v2/inputs',
        method: 'PATCH',
        headers: {
            'Authorization': 'Bearer ' + accessToken
        },
        json: {
            inputs,
            action: 'overwrite'
        }
    }, (err, response, reslut) => {
        if(!err && (/20.*/).test(response.statusCode))  
            defered.resolve(lib.safeParse(reslut));
        else 
            defered.reject(lib.safeParse(err || reslut || response.statusCode));
    });

    return defered.promise;    
}