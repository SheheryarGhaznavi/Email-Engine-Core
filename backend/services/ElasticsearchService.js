const { Client } = require('@elastic/elasticsearch');
const config = require('../config/config');

const client = new Client({ node: config.elasticsearch.url });

const indexEmails = async (emails) => {
    const body = emails.flatMap(email => [{ index: { _index: 'emails' } }, email]);

    const { body: bulkResponse } = await client.bulk({ refresh: true, body });

    if (bulkResponse.errors) {
        const erroredDocuments = bulkResponse.items.filter(item => item.index && item.index.error);
        console.error('Error indexing emails:', erroredDocuments);
    }
};

module.exports = {
    indexEmails,
};
