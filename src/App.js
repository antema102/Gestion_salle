import React from "react";
import './assets/style/Footer.css';
import './assets/style/Header.css';


import Footer from './compoments/Footer/Footer';
import Header from './compoments/Header/Header';
import NavBar from './compoments/Header/NavBar.js';
import Aprops from './pages/Aprops';
import Acceuil from './pages/Acceuil';

import { BrowserRouter, Switch, Route } from "react-router-dom";

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <NavBar />
                <Switch>
                    <Route path="/" component={Acceuil} exact />
                    <Route path="/Aprops" component={Aprops} />
                </Switch>
                <Footer />
            </BrowserRouter>
        )
    }
}
export default App;