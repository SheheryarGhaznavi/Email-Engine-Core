const BaseController = require('./BaseController');
const outlookService = require('../services/OutlookService');

class AccountController extends BaseController
{
    /// create new account
    async create(request, response)
    {
        const authUrl = outlookService.getAuthUrl();
        response.redirect(authUrl);
    }

    /// receive a callback after login
    async callback(request, response)
    {
        response.status(200).json({'message' : 'Account login', 'request' : request.query});
    }
}


module.exports = new AccountController;