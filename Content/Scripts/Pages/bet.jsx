import React, { Component } from "react";
import Games from "../Components/games.jsx";
import Loader from "../Components/loader.jsx";
import { Route, Redirect } from 'react-router';
import { withRouter } from "react-router-dom";
var axios = require('axios');

class Bet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: null,
            games: [],
            isLoading: true
        };

        this.getUserFromStorage = this.getUserFromStorage.bind(this);
        this.getTheBet = this.getTheBet.bind(this);
    }

    componentDidMount() {
        var user = this.getUserFromStorage();
        if (user) {
            this.setState({ currentUser: user });
        }
        this.getTheBet(user);
        
        
        {/*else {
            this.props.history.push("/");
        }*/}
    }

    getTheBet(user) {
        this.setState({ isLoading: true });
        axios.post('/bet/getTheBet', user).then(response => {
            console.log(response);
            this.setState({ games: response.data.gameList });
            this.setState({ isLoading: false });
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    getUserFromStorage() {
        try {
            var user = localStorage.getItem("tbCurrentUser");
            return JSON.parse(user);
        }
        catch (error) {
            return null;
        }
    }

    render() {
        return (
            <div className="bet-container">
                {this.state.isLoading ? <Loader isLoading={this.state.isLoading} /> : <Games games={this.state.games} />}
            </div>
        );
    }
}

export default Bet;