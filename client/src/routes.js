import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import MainLayout from './hoc/mainLayout';
import GoogleFontLoader from 'react-google-font-loader';
import Home from './components/Home/home.js';
import Headers from './components/Navigation/header.js';

const Router = () => {
    return (
        <BrowserRouter>
            <Headers />
            <>
                <MainLayout>
                    <Routes>
                        <Route path="/" component={Home} />
                    </Routes>
                </MainLayout>
            </>

            <GoogleFontLoader
                fonts={[{ font: 'Roboto', weights: [300, 400, 900] },
                { font: 'Fredoka One' }]}
            />
        </BrowserRouter>
    )
}

export default Router;