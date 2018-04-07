import React, { Component } from "react";
import Games from "../Components/games.jsx";
import Questions from "../Components/questions.jsx";
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
            isLoading: true,
            questionsIsLoading: true
        };

        this.getUserFromStorage = this.getUserFromStorage.bind(this);
        this.getTheBet = this.getTheBet.bind(this);
        this.getQuestions = this.getQuestions.bind(this);
        this.saveTheBet = this.saveTheBet.bind(this);
        this.updateUserBet = this.updateUserBet.bind(this);
        this.updateUserQuestions = this.updateUserQuestions.bind(this);
    }

    componentDidMount() {
        var user = this.getUserFromStorage();
        if (user) {
            this.setState({ currentUser: user });
        }
        this.getTheBet(user);
        this.getQuestions(user);
        
        
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

    getQuestions(user) {
        this.setState({ questionsIsLoading: true });
        axios.post('/bet/getQuestions', user).then(response => {
            console.log(response);
            this.setState({ questions: response.data.questions });
            this.setState({ questionsIsLoading: false });
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

    saveTheBet() {
        this.setState({ isLoading: true });
        var userBetObj = { games: this.state.games, user: this.state.currentUser }
        axios.post('/bet/saveBet', userBetObj).then(response => {
            console.log(response);
            this.setState({ isLoading: false });
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    updateUserBet(games) {
        this.setState({ games: games});
    }

    updateUserQuestions(questions) {
        this.setState({ questions: questions });
    }

    render() {
        return (
            <div className="bet-container">
                <button onClick={this.saveTheBet} className="tb-btn save-button">SAVE BET</button>
                {this.state.isLoading || this.state.questionsIsLoading ? <Loader isLoading={this.state.isLoading} /> : <Games games={this.state.games} updateUserBet={this.updateUserBet} />}
                {this.state.isLoading || this.state.questionsIsLoading ? '' : <Questions questions={this.state.questions} updateUserQuestions={this.updateUserQuestions} />}
            </div>
        );
    }
}

export default Bet;