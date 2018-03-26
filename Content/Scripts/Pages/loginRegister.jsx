import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { Redirect } from 'react-router';
var axios = require('axios');

class LoginRegister extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loginName: '',
            loginPassword: '',
            registerName: '',
            registerPassword: '',
            registerEmail: '',
            isLoginToggled: true
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.registerAndLogin = this.registerAndLogin.bind(this);
        this.login = this.login.bind(this);
        this.toggleLoginRegisterView = this.toggleLoginRegisterView.bind(this);
    }
    /**METHODS**/
    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    login() {
        const user = { Name: this.state.loginName, Password: this.state.loginPassword};
        axios.post('/user/login', user).then(response => {
            if(response.data.user !== null) {
                this.props.setCurrentUserInHeader(response.data.user);
            }
        }).catch(function (error) {
            console.log(error);
        });
    }

    registerAndLogin() {
        const user = { Name: this.state.registerName, Password: this.state.registerPassword, Email: this.state.registerEmail };
        axios.post('/user/register', user).then(function (response) {
            console.log(response);
            if (response.data.user !== null) {
                this.props.setCurrentUserInHeader(response.data.user);
            }
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    toggleLoginRegisterView() {
        this.state.isLoginToggled = !this.state.isLoginToggled;
        if (this.state.isLoginToggled) {
            $(".register-form-container").hide();
            $(".login-form-container").fadeIn();
        }
        else {
            $(".login-form-container").hide();
            $(".register-form-container").css("display", "flex").hide().fadeIn();
        }
    }

    /**RENDER**/
    render() {
        return (
            <div className="login-register-container">
                <div className="login-form-container">
                    <h2>What are you waiting for?</h2>
                    <div className="tb-form-field">
                        <input type="text" className="tb-input" id="login-username" name="loginName" value={this.state.loginName} onChange={this.handleInputChange} />
                        <label htmlFor="login-username">USERNAME</label>
                    </div>
                    <div className="tb-form-field">
                        <input type="password" className="tb-input" id="login-password" name="loginPassword" value={this.state.loginPassword} onChange={this.handleInputChange}/>
                        <label htmlFor="login-password">PASSWORD</label>
                    </div>
                    <div className="tb-btn-container">
                        <a className="tb-btn-link" onClick={this.toggleLoginRegisterView}>Not yet a member?!</a>
                        <a className="tb-btn" onClick={this.login}>Login</a>
                    </div>
                </div>
                <div className="register-form-container">
                    <h2>It's about time...</h2>
                    <div className="tb-form-field">
                        <input type="text" className="tb-input" id="register-username" name="registerName" value={this.state.registerName} onChange={this.handleInputChange}/>
                        <label htmlFor="register-username">USERNAME</label>
                    </div>
                    <div className="tb-form-field">
                        <input type="password" className="tb-input" id="register-password" name="registerPassword" value={this.state.registerPassword} onChange={this.handleInputChange}/>
                        <label htmlFor="register-password">PASSWORD</label>
                    </div>
                    <div className="tb-form-field">
                        <input type="email" className="tb-input" id="register-email" name="registerEmail" value={this.state.registerEmail} onChange={this.handleInputChange} />
                        <label htmlFor="register-email">EMAIL</label>
                    </div>
                    <div className="tb-btn-container">
                        <a className="tb-btn-link" onClick={this.toggleLoginRegisterView}>Cancel</a>
                        <a className="tb-btn" onClick={this.registerAndLogin}>Register</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginRegister;