const lib      = require('../lib/functions.js');
const Clarifai = require('clarifai');

module.exports = (req, res) => {
    req.body.args = lib.clearArgs(req.body.args);

    let { 
        clientId,
        clientSecret
    } = req.body.args;
        
    let required = lib.parseReq({clientId, clientSecret});

    if(required.length > 0) 
        throw new RapidError('REQUIRED_FIELDS', required);

    let app = new Clarifai.App(clientId, clientSecret);
    
    return app.getToken();  
}