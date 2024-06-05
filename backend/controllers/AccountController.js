const BaseController = require('./BaseController');
const OutlookService = require('../services/OutlookService');

class AccountController extends BaseController
{
    /// create new account
    async create(request, response)
    {
        const authUrl = OutlookService.getAuthUrl();
        response.status(200).send(authUrl);
    }

    /// receive a callback after login
    async callback(request, response)
    {
        const { code } = request.query;
        const redirect_url = await OutlookService.getAuthorizationCode(code);
      
        response.redirect(redirect_url);
    }
}


module.exports = new AccountController;