const Q       = require('q');
const lib     = require('../lib/functions.js');
const request = require('request');

module.exports = (req, res) => {
    const defered = Q.defer();

    req.body.args = lib.clearArgs(req.body.args);

    let { 
        apiKey,
        queries
    } = req.body.args;

    let required = lib.parseReq({apiKey, queries});

    if(required.length > 0) 
        throw new RapidError('REQUIRED_FIELDS', required);

    if(typeof queries == 'string')
    try {
        queries = JSON.parse(queries);
    } catch(e) {
        throw new RapidError('JSON_VALIDATION');
    }

    let query = { ands: [] },
        output = { input: { data: {} } };

    queries.map(q => {
        q.image 
            ? output.input.data.image = q.image 
            : q.concept 
                ? output.input.data.concepts = [q.concept]
                : q.metadata ? output.input.data.metadata = q.metadata : '';

        query.ands.push(output);
    });

    request({
        uri: 'https://api.clarifai.com/v2/searches',
        method: 'POST',
        headers: {
            'Authorization': 'Key ' + apiKey
        },
        json: {
            query
        }
    }, (err, response, reslut) => {
        if(!err && (/20.*/).test(response.statusCode))  
            defered.resolve(lib.safeParse(reslut));
        else 
            defered.reject(lib.safeParse(err || reslut || response.statusCode));
    });

    return defered.promise;    
}