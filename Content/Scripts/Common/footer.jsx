import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeContent: {home:true,bet:false,table:false}
        };
        this.requestHome = this.requestHome.bind(this);
        this.requestBet = this.requestBet.bind(this);
        this.requestTable = this.requestTable.bind(this);
    }

    requestHome() {
        var contentObj = { home: true, bet: false, table: false };
        this.setState({ activeContent: contentObj });
        this.props.changeContent(contentObj);
    }

    requestBet() {
        var contentObj = { home: false, bet: true, table: false };
        this.setState({ activeContent: contentObj });
        this.props.changeContent(contentObj);
    }

    requestTable() {
        var contentObj = { home: false, bet: false, table: true };
        this.setState({ activeContent: contentObj });
        this.props.changeContent(contentObj);
    }

    render() {
        return (
            <div className="footer-container">
                <nav>
                    <a onClick={this.requestHome}>Home</a>
                    <a onClick={this.requestBet}>BET</a>
                    <a onClick={this.requestTable}>TABLE</a>
                </nav>
            </div>
        );
    }
}

export default Footer;