import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from "./Common/header.jsx";
import Footer from "./Common/footer.jsx";
import Content from "./Common/content.jsx";
import LoginRegister from "./Pages/loginRegister.jsx";






class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: null,
            goToStart: false,
            activeContent: {home: true, bet:false, table:false, contact:false }
        };

        this.setCurrentUser = this.setCurrentUser.bind(this);
        this.getUserCookie = this.getUserCookie.bind(this);
        this.logoutCurrentUser = this.logoutCurrentUser.bind(this);
        this.changeContent = this.changeContent.bind(this);
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

    logoutCurrentUser() {
        this.setCurrentUser(null);
    }

    changeContent(requestedContent) {
        this.setState({ activeContent: requestedContent });
    }

    render() {
        const currentUser = this.state.currentUser;
        function isLoggedIn() {
            return currentUser ? true : false;
        }

        return (
            <div className="main-container">
                <Header />
                {isLoggedIn() ? <Content currentUser={this.state.currentUser} activeContent={this.state.activeContent} /> : <LoginRegister setCurrentUserInRoot={this.setCurrentUser} />}
                {isLoggedIn() ? <Footer changeContent={this.changeContent} logout={this.logoutCurrentUser} /> : null}
                
            </div>
            )
    };
}

ReactDOM.render(<Main />, document.getElementById('main-container'));