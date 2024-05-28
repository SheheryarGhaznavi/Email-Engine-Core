const BaseController = require('./controllers/BaseController');

class AccountController extends BaseController
{
    /// create new account
    async createAccount(request, response)
    {
        response.status(200).json({'message' : 'Account created'});
    }
}


module.exports = new AccountController;