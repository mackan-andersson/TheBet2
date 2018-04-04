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
        this.requestFAQ = this.requestFAQ.bind(this);
        this.toggleExtraChoices = this.toggleExtraChoices.bind(this);
        this.logout = this.logout.bind(this);
    }

    requestHome() {
        var contentObj = { home: true, bet: false, table: false, contact: false, faq: false };
        this.setState({ activeContent: contentObj });
        this.setState({ isExtraChoicesToggled: false });
        this.props.changeContent(contentObj);
    }

    requestBet() {
        var contentObj = { home: false, bet: true, table: false, contact: false, faq: false };
        this.setState({ activeContent: contentObj });
        this.setState({ isExtraChoicesToggled: false });
        this.props.changeContent(contentObj);
    }

    requestTable() {
        var contentObj = { home: false, bet: false, table: true, contact: false, faq: false };
        this.setState({ activeContent: contentObj });
        this.setState({ isExtraChoicesToggled: false });
        this.props.changeContent(contentObj);
    }

    requestContact() {
        var contentObj = { home: false, bet: false, table: false, contact: true, faq: false };
        this.setState({ activeContent: contentObj });
        this.setState({ isExtraChoicesToggled: false });
        this.props.changeContent(contentObj);
    }

    requestFAQ() {
        var contentObj = { home: false, bet: false, table: false, contact: false, faq: true };
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
        const requestContact = this.requestContact;
        const logoutFunc = this.logout;
        const requestHome = this.requestTable;
        const requestBet = this.requestBet;
        const requestTable = this.requestTable;
        const requestFAQ = this.requestFAQ;
        function showButtons() {
            if (showExtra) {
                return <div className="button-container">
                    <button className="tb-btn" onClick={logoutFunc}><span>LOGOUT</span></button>
                    <button className={"tb-btn " + (activeContent.contact ? 'active' : '')} onClick={requestContact}><span>CONTACT</span></button>
                    <button className={"tb-btn " + (activeContent.faq ? 'active' : '')} onClick={requestFAQ}><span>FAQ</span></button>
                </div>
            }
            else {
                return <div className="button-container"><button className={"tb-btn " + (activeContent.home ? 'active' : '')} onClick={requestHome}><span>HOME</span></button>
                    <button className={"tb-btn " + (activeContent.bet ? 'active' : '')} onClick={requestBet}><span>BET</span></button>
                    <button className={"tb-btn " + (activeContent.table ? 'active' : '')} onClick={requestTable}><span>TABLE</span></button>
                    </div>
            }
        }

        return (
            <div className="footer-container">
                <nav>
                    
                    {showButtons()}
                    <button className={"tb-btn " + (this.state.isExtraChoicesToggled ? 'active' : '')} onClick={this.toggleExtraChoices}><span>...</span></button>
                </nav>
            </div>
        );
    }
}

export default Footer;