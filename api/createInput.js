const Q       = require('q');
const lib     = require('../lib/functions.js');
const request = require('request');

module.exports = (req, res) => {
    const defered = Q.defer();

    req.body.args = lib.clearArgs(req.body.args);

    let { 
        apiKey,
        image,
        metadata,
        id,
        conceptId,
        conceptValue,
        cropLeft,
        cropRight,
        cropTop,
        cropBottom
    } = req.body.args;
        
    let required = lib.parseReq({apiKey, image});

    if(required.length > 0) 
        throw new RapidError('REQUIRED_FIELDS', required);

    if(typeof metadata == 'string') {
        try {
            metadata = JSON.parse(metadata);
        } catch(e) {
            throw new RapidError('JSON_VALIDATION')
        }
    }

    let data = lib.clearArgs({
        inputs: [{
            id, 
            data: {
                image: {
                    url: image,
                    //crop: [cropTop || 1, cropLeft || 1, cropBottom || 1, cropRight || 1]
                },
                /*concepts: [{
                    id: conceptId,
                    value: conceptValue
                }]*/
            }
        }]
    }, true);

    if(conceptId) {
        data.inputs[0].data.concepts    = [];
        data.inputs[0].data.concepts[0] = {id: conceptId, value: true};
    }

    // clearargs is recursive
    if(metadata) data.inputs[0].data.metadata = metadata;

    if(cropTop || cropLeft || cropBottom || cropRight)
        data.inputs[0].data.image.crop = [
            parseFloat(cropTop)    || 0, 
            parseFloat(cropLeft)   || 0, 
            parseFloat(cropBottom) || 0, 
            parseFloat(cropRight)  || 0
        ];
    
    request({
        uri: 'https://api.clarifai.com/v2/inputs',
        method: 'POST',
        headers: {
            'Authorization': 'Key ' + apiKey
        },
        json: data
    }, (err, response, reslut) => {
        if(!err && (/20.*/).test(response.statusCode))  
            defered.resolve(lib.safeParse(reslut));
        else 
            defered.reject(lib.safeParse(err || reslut || response.statusCode));
    });

    return defered.promise;    
}