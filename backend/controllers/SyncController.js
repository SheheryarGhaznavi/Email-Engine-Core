const BaseController = require('./BaseController');

class SyncController extends BaseController
{
    /// sync email from email account
    async syncEmail(request, response)
    {
        response.status(200).json({'message' : 'Email Sync'});
    }
}


module.exports = new SyncController;