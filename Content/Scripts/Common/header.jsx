import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import LoginRegister from "../Pages/loginRegister.jsx";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isMenuToggled: false,
            isLoginToggled: false,
            currentUser: this.props.currentUser
        };
        this.toggleMenu = this.toggleMenu.bind(this);
        this.toggleLogin = this.toggleLogin.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
        this.setCurrentUser = this.setCurrentUser.bind(this);
        this.logoutUser = this.logoutUser.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.currentUser !== this.props.currentUser) {
            this.setState({ currentUser: nextProps.currentUser });
        }
    }


    toggleMenu() {
        this.state.isMenuToggled = !this.state.isMenuToggled;
        if (this.state.isMenuToggled) {
            $(".content-container").hide();
            $(".menu-container").width('100%');
        }
        else {
            $(".content-container").show();
            $(".menu-container").width('0');
        }
    }

    toggleLogin() {
        this.state.isLoginToggled = !this.state.isLoginToggled;
        if (this.state.isLoginToggled) {
            $(".content-container").hide();
            $(".login-register-container").css({'opacity': '1','height': 'calc(100% - 100px)'});
        }
        else {
            $(".login-register-container").css({ 'opacity': '0', 'height': '0' });
            $(".content-container").show();
        }
    }

    closeMenu() {
        this.state.isMenuToggled = false;
        this.state.isLoginToggled = false;
        $(".login-register-container").css({ 'opacity': '0', 'height': '0' });
        $(".content-container").show();
        $(".menu-container").width('0');
    }

    setCurrentUser(user) {
        this.setState({ currentUser: user });
        this.props.setCurrentUserInRoot(user);
        this.state.isLoginToggled = false;
        $(".content-container").show();
        $(".login-register-container").css({ 'opacity': '0', 'height': '0' });
    }

    logoutUser() {
        this.props.setCurrentUserInRoot(null);
    }

    render() {
        var loginPart = null;
        if (this.state.currentUser) {
            loginPart = <a onClick={this.logoutUser} className="login-button"><i className="fa fa-user"></i><span>Get out</span></a>;
        }
        else {
            loginPart = <a onClick={this.toggleLogin} className="login-button"><i className="fa fa-user"></i><span>Get in</span></a>;
        }
        return (
            <div className="header-container">
                <div className="top-container">
                    <a className="menu-button" onClick={this.toggleMenu}><i className="fa fa-bars menu-open-btn"></i><i className="fa fa-times menu-close-btn"></i></a>
                    <h1>THE BET</h1>
                    {loginPart}
                </div>
                <div className="menu-container">
                    <ul>
                        <li><NavLink to="/bet" onClick={this.closeMenu}>BET</NavLink></li>
                        <li><NavLink to="/table" onClick={this.closeMenu}>TABLE</NavLink></li>
                        <li><NavLink to="/results" onClick={this.closeMenu}>RESULTS</NavLink></li>
                        <li><NavLink to="/faq" onClick={this.closeMenu}>FAQ</NavLink></li>
                    </ul>
                </div>
                <LoginRegister setCurrentUserInHeader={this.setCurrentUser} currentUser={this.state.currentUser} />
            </div>
        );
    }
}

export default Header;