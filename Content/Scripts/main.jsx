import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
    Route,
    NavLink,
    HashRouter,
    Redirect
} from "react-router-dom";
import Header from "./Common/header.jsx";
import Content from "./Common/content.jsx";



class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: null,
            goToStart: false
        };

        this.setCurrentUser = this.setCurrentUser.bind(this);
        this.getUserCookie = this.getUserCookie.bind(this);
    }

    componentDidMount() {
        var user = this.getUserCookie();
        if (user) {
            this.setState({ currentUser: user });
        }
    }

    setCurrentUser(user) {
        if (user) {
            var date = new Date();
            date.setDate(date.getDate() + 30);
            var jsonUser = JSON.stringify(user);
            localStorage.setItem('tbCurrentUser', jsonUser);
            document.cookie = "tbCurrentUser=" + jsonUser + "; expires=" + date;
            this.setState({ currentUser: user });
        }
        else {
            this.setState({ currentUser: null });
            localStorage.removeItem("tbCurrentUser");
            document.cookie = 'tbCurrentUser=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        }
        this.setState({ currentUser: null });
    }

    getUserCookie() {
        var re = new RegExp(name + "=([^;]+)");
        var value = re.exec(document.cookie);
        if (value != null) {
            var user = unescape(value[1]);
            try {
                return JSON.parse(user);
            }
            catch(error){
                return null;
            }
        }
    }

    render() {
        return (
            <HashRouter>
                <div className="route-wrapper">
                    <Header setCurrentUserInRoot={this.setCurrentUser} currentUser={this.state.currentUser} />
                    <Content currentUser={this.state.currentUser}></Content>
                </div>
            </HashRouter>
            )
    };
}

ReactDOM.render(<Main />, document.getElementById('main-container'));