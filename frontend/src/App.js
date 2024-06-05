import React from 'react';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import AddAccount from './components/AddAccount';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AddAccount />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;