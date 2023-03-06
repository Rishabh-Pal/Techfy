import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
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
                    <Switch>
                        <Route path="/" component={Home} />
                    </Switch>
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