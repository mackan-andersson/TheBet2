import React, { Component } from "react";
import Deadlines from "./deadlines.jsx";


class Introduction extends Component {
    render() {
        return (
            <div className="intro-container">
                <h1>Welcome to the Bet</h1>
                <p className="preamble">A betting game for the Fifa World Cup 2018 in Russia.</p>
                <h3>How do I play?</h3>
                <p>You score the games, answer the questions and pay (100 sek) if you wanna take part in the competion for the prize pool.</p>
                <h3>Where do I swish the 100 sek?</h3>
                <p>To Markus Andersson(+46 739 39 39 64), write your username in the message</p>
                <h3>Why do I pay?</h3>
                <p>100% of the swished money goes to the prize pool.</p>
                <h3>The prize pool?</h3>
                <p>Indeed! The winner of the bet takes 70% of the total prize pool, second place takes 20% and third takes 10%</p>
                <h3>How do I win?</h3>
                <p>Two things,</p>
                <p>First, you score the games, 3 points if you get the result right, 1 point if you get the win draw loss right.</p>
                <p>Second, you answer the questions, 5 points if you get the answer right.</p>
                <h3>Dont forget!</h3>
                <p>To update your bet as the world cup progress into the tournament stage, games will be unlocked to bet on as they get set.</p>
                <p>And of course! The stages(Group, Round of 16, Quarter final, Semi final, and final) will get locked a couple of hours before they begin.</p>
            </div>
        );
    }
}

export default Introduction;