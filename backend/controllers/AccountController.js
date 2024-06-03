const BaseController = require('./BaseController');
const OutlookService = require('../services/OutlookService');

class AccountController extends BaseController
{
    /// create new account
    async create(request, response)
    {
        const authUrl = OutlookService.getAuthUrl();
        response.redirect(authUrl);
    }

    /// receive a callback after login
    async callback(request, response)
    {
        const { code } = request.query;
        const tokenData = await OutlookService.getAuthorizationCode(code);
      
        console.log(tokenData);
        response.status(200).json({'message' : 'Account login', 'request' : tokenData});
    }
}


module.exports = new AccountController;