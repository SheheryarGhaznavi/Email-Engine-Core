const BaseController = require('./BaseController');
const OutlookService = require('../services/OutlookService');

class SyncController extends BaseController
{
    /// sync email from email account
    async syncEmail(request, response)
    {
        const { accessToken } = request.body;
        try {
            const emails = await OutlookService.fetchEmails(accessToken);

            response.status(200).send({'message' : 'Emails synchronized successfully', 'emails' : emails});

        } catch (error) {
            console.error('Error syncing emails:', error);
            throw 'Error syncing emails:', error;
        }
    }
}


module.exports = new SyncController;