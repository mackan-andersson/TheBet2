import React, { Component } from "react";
import Moment from "moment";


class Questions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            questions: this.props.questions
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.questions !== this.props.questions) {
            this.setState({ questions: nextProps.questions });
        }
    }
    render() {
        var questions = this.state.questions;
        function teamSelect(idx) {
            return <div>{idx}</div>
        }

        function stageSelect(idx) {
            return <div>stage</div>
        }

        function numberSelect(idx) {
            return <div>number</div>
        }

        var listItems = questions.map((question, idx) =>
            <li key={question.questionId}>
                <h3>{question.questionText}</h3>
                {question.questionType === 'Team' ? teamSelect(idx) : ''}
                {question.questionType === 'Stage' ? stageSelect(idx) : ''}
                {question.questionType === 'Number' ? numberSelect(idx) : ''}
            </li>
        );

        return (
            <div className="question-container">
                <ul className="question-list">
                    {listItems}
                </ul>
            </div>
        );
    }
}

export default Questions;