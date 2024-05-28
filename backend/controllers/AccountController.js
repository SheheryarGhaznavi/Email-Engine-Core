const BaseController = require('./BaseController');

class AccountController extends BaseController
{
    /// create new account
    async create(request, response)
    {
        response.status(200).json({'message' : 'Account created'});
    }
}


module.exports = new AccountController;