import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const SyncEmails = () => {
    const [emails, setEmails] = useState([]);

    useEffect(() => {
        const fetchEmails = async () => {
        try {
            const { id } = useParams();
            const response = await axios.post('http://localhost:5001/api/sync',{ accessToken: id }); // retrieving emails
            setEmails(response.data.emails);
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