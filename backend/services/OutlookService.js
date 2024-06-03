const qs = require('querystring');
const axios = require('axios');

const config = require('../config/config');

const getAuthUrl = () => {

    const params = new URLSearchParams({
        client_id: config.outlook.clientId,
        response_type: 'code',
        redirect_uri: config.outlook.redirectUri,
        scope: config.outlook.scopes,
    });

    return `https://login.microsoftonline.com/common/oauth2/v2.0/authorize?${params.toString()}`;
};

const getAuthorizationCode = async (code) => {

    const token_response = await axios.post('https://login.microsoftonline.com/common/oauth2/v2.0/token', qs.stringify({
        client_id: config.outlook.clientId,
        client_secret: config.outlook.clientSecret,
        code: code,
        redirect_uri: config.outlook.redirectUri,
        grant_type: 'authorization_code',
    }));
  
    return token_response.data;
};

module.exports = {
    getAuthUrl,
    getAuthorizationCode
};
