// TODO

const lib      = require('../lib/functions.js');
const Clarifai = require('clarifai');

module.exports = (req, res) => {
    req.body.args = lib.clearArgs(req.body.args);

    let { 
        accessToken,
        queries,
        page,
        perPage
    } = req.body.args;
        
    let required = lib.parseReq({accessToken, queries});

    if(required.length > 0) 
        throw new RapidError('REQUIRED_FIELDS', required);

    let app = new Clarifai.App('', '');

    app.setToken({
        access_token: accessToken,
        expires_in: Infinity,
        expireTime: Infinity
    });

    if(typeof queries == 'string')
    try {
        queries = JSON.parse(queries);
    } catch(e) {
        throw new RapidError('JSON_VALIDATION');
    }

    return app.inputs.search(queries, {page, perPage});
}