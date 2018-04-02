import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeContent: { home: true, bet: false, table: false, contact: false },
            isExtraChoicesToggled: false
        };
        this.requestHome = this.requestHome.bind(this);
        this.requestBet = this.requestBet.bind(this);
        this.requestTable = this.requestTable.bind(this);
        this.requestContact = this.requestContact.bind(this);
        this.toggleExtraChoices = this.toggleExtraChoices.bind(this);
        this.logout = this.logout.bind(this);
    }

    requestHome() {
        var contentObj = { home: true, bet: false, table: false, contact: false };
        this.setState({ activeContent: contentObj });
        this.setState({ isExtraChoicesToggled: false });
        this.props.changeContent(contentObj);
    }

    requestBet() {
        var contentObj = { home: false, bet: true, table: false, contact: false };
        this.setState({ activeContent: contentObj });
        this.setState({ isExtraChoicesToggled: false });
        this.props.changeContent(contentObj);
    }

    requestTable() {
        var contentObj = { home: false, bet: false, table: true, contact: false };
        this.setState({ activeContent: contentObj });
        this.setState({ isExtraChoicesToggled: false });
        this.props.changeContent(contentObj);
    }

    requestContact() {
        var contentObj = { home: false, bet: false, table: false, contact:true };
        this.setState({ activeContent: contentObj });
        this.setState({ isExtraChoicesToggled: false });
        this.props.changeContent(contentObj);
    }

    toggleExtraChoices() {
        this.setState({ isExtraChoicesToggled: !this.state.isExtraChoicesToggled });
    }

    logout() {
        this.props.logout();
    }

    render() {
        const showExtra = this.state.isExtraChoicesToggled;
        const activeContent = this.state.activeContent;
        const requestContactFunc = this.requestContact;
        const logoutFunc = this.logout;
        function extraContent() {
            if (showExtra) {
                return <div className="extra-choices">
                    <button className="tb-btn" onClick={logoutFunc}><span>Logout</span></button>
                    <button className={"tb-btn " + (activeContent.contact ? 'active' : '')} onClick={requestContactFunc}><span>Contact</span></button>
                </div>
            }
        }

        return (
            <div className="footer-container">
                <nav>
                    <button className={"tb-btn " + (this.state.activeContent.home ? 'active' : '')} onClick={this.requestHome}><span>HOME</span></button>
                    <button className={"tb-btn " + (this.state.activeContent.bet ? 'active' : '')} onClick={this.requestBet}><span>BET</span></button>
                    <button className={"tb-btn " + (this.state.activeContent.table ? 'active' : '')} onClick={this.requestTable}><span>TABLE</span></button>
                    <div className="extra-choices-container">
                        <button className={"tb-btn " + (this.state.isExtraChoicesToggled ? 'active' : '')} onClick={this.toggleExtraChoices}><span>...</span></button>
                        {extraContent()}
                    </div>
                </nav>
            </div>
        );
    }
}

export default Footer;