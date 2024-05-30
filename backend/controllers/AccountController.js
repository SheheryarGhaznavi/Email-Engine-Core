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
}


module.exports = new AccountController;