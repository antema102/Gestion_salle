import React, { useEffect } from "react";
import './assets/style/Footer.css';
import './assets/style/Header.css';
import { Helmet } from 'react-helmet';
import Footer from './compoments/Footer/Footer';
import Header from './compoments/Header/Header';
import NavBar from './compoments/Header/NavBar.js';
import Apropos from './pages/Apropos';
import Acceuil from './pages/Acceuil';
import Connection from "./pages/Connection";
import Notfound from "./pages/Notfound";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import logoIcone from './assets/image/logo.jpg';

const App = () => {



    
    return (
        <BrowserRouter>
            <Helmet>
                <link rel="icon" type="image/x-icon" href={logoIcone} />
            </Helmet>
            <Switch>
                <Route path="/connection" component={Connection} />
                <Route>
                    <NavBar />
                    <Switch>
                        <Route path="/Aprops" component={Apropos} />
                        <Route path="/" component={Acceuil} exact />
                        <Route component={Notfound} exact />
                    </Switch>
                    <Footer />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}
export default App;