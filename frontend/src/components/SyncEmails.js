import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SyncEmails = () => {
    const [emails, setEmails] = useState([]);

    useEffect(() => {
        const fetchEmails = async () => {
        try {
            const response = await axios.get('http://localhost:5001/api/sync'); // Adjust endpoint as needed
            setEmails(response.data);
        } catch (error) {
            console.error('Error fetching emails:', error);
        }
        };

        fetchEmails();
    }, []);

    return (
        <div>
        <h1>Email Data</h1>
        <ul>
            {emails.map(email => (
            <li key={email.id}>
                <strong>{email.subject}</strong> - {email.sender.emailAddress.name}
            </li>
            ))}
        </ul>
        </div>
    );
};

export default SyncEmails;