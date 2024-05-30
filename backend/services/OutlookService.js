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

module.exports = {
    getAuthUrl
};
