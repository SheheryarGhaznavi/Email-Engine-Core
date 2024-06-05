require('dotenv').config();

module.exports = {
    outlook: {
        clientId: process.env.OUTLOOK_CLIENT_ID,
        clientSecret: process.env.OUTLOOK_CLIENT_SECRET,
        redirectUri: process.env.OUTLOOK_REDIRECT_URI,
        frontendRedirectUri: process.env.FRONTEND_REDIRECT_URI,
        scopes: 'openid profile offline_access User.Read Mail.Read',
    }
};
