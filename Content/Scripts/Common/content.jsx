import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import Home from "../Pages/Home.jsx";
import Results from "../Pages/results.jsx";
import Table from "../Pages/table.jsx";
import Bet from "../Pages/bet.jsx";
import Faq from "../Pages/faq.jsx";
import LoginRegister from "../Pages/loginRegister.jsx";

class Content extends Component {
    render() {
        return (
            <div className="content-container">
                <Route exact path="/" component={Home} />
                <Route path="/bet" component={Bet} />
                <Route path="/results" component={Results} />
                <Route path="/table" component={Table} />
                <Route path="/faq" component={Faq} />
            </div>
        );
    }
}

export default Content;