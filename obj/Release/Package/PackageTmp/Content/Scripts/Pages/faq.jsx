import React, { Component } from "react";
import Deadlines from "../Components/deadlines.jsx";

class FAQ extends Component {
    render() {
        return (
            <div className="faq-container">
                <h3>How do I play?</h3>
                <p>You score the games, answer the questions and to play
                    for the prizepool you swish 100 sek to Markus(+46 739 393 964), <strong>write your username in the message</strong></p>
                <h3>Whats the prizepool?</h3>
                <p>Out of the total swished sum the winner takes 70%, second place takes 20% and third place takes 10%.</p>
                <h3>Deadlines?</h3>
                <Deadlines />
            </div>
        );
    }
}

export default FAQ;