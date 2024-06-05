import React from 'react';
import axios from 'axios';

const AddAccount = () => {

    const addAccount = () => {

        axios.post('http://localhost:5001/api/accounts/create',{
            'redirect_uri' : window.location.href+'accounts/callback'
        })
        .then(response => {
            window.location.href = response.data;
        })
        .catch(error => {
            console.error('Error adding account:', error);
        });
    };

    return (
        <div>
            <h1>Add Outlook Account</h1>
            <button onClick={addAccount}>Link Outlook Account</button>
        </div>
    );
};

export default AddAccount;
