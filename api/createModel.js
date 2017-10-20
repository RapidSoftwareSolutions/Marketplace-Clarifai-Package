const Q       = require('q');
const lib     = require('../lib/functions.js');
const request = require('request');

module.exports = (req, res) => {
    const defered = Q.defer();

    req.body.args = lib.clearArgs(req.body.args);

    let { 
        apiKey,
        modelId,
        modelName,
        conceptsData,
        closedEnvironment,
        conceptsMutuallyExclusive
    } = req.body.args;
        
    let required = lib.parseReq({apiKey, modelId});

    if(required.length > 0) 
        throw new RapidError('REQUIRED_FIELDS', required);

    if(typeof conceptsData == 'string') {
        try {
            conceptsData = JSON.parse(conceptsData);
        } catch(e) {
            throw new RapidError('JSON_VALIDATION')
        }
    }

    let body = lib.clearArgs({
        model: {
            id: modelId,
            name: modelName,
            output_info: {
                data: {
                    concepts: conceptsData
                }
            },
            output_config: {
                closed_environment: closedEnvironment,
                concepts_mutually_exclusive: conceptsMutuallyExclusive
            }
        } 
    }, true);
    
    request({
        uri: 'https://api.clarifai.com/v2/models',
        method: 'POST',
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