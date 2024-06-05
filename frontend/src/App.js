import React from 'react';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import AddAccount from './components/AddAccount';
import SyncEmails from './components/SyncEmails';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AddAccount />} />
                <Route path="/sync" element={<SyncEmails />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;