const Q       = require('q');
const lib     = require('../lib/functions.js');
const request = require('request');

module.exports = (req, res) => {
    const defered = Q.defer();

    req.body.args = lib.clearArgs(req.body.args);

    let { 
        apiKey,
        id,
        concepts
    } = req.body.args;
        
    let required = lib.parseReq({apiKey, id, concepts});

    if(required.length > 0) 
        throw new RapidError('REQUIRED_FIELDS', required);

    if(typeof concepts == 'string') {
        try {
            concepts = JSON.parse(concepts);
        } catch(e) {
            throw new RapidError('JSON_VALIDATION')
        }
    }

    let body = lib.clearArgs({
        action: 'remove',
        models: [{
            id: id,
            output_info: {
                data: {
                    concepts
                }
            }
        }]
    }, true);
    
    request({
        uri: 'https://api.clarifai.com/v2/models',
        method: 'PATCH',
        headers: {
            'Authorization': 'Key ' + apiKey
        },
        json: body
    }, (err, response, reslut) => {
        if(!err && (/20.*/).test(response.statusCode))  
            defered.resolve(lib.safeParse(reslut));
        else 
            defered.reject(lib.safeParse(err || reslut || response.statusCode));
    });

    return defered.promise;    
}