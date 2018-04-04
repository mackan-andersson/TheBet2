import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Home from '../Pages/home.jsx';
import Bet from '../Pages/bet.jsx';
import Table from '../Pages/table.jsx';
import Contact from '../Pages/contact.jsx';
import FAQ from '../Pages/faq.jsx';


class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeContent: this.props.activeContent
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.activeContent !== this.props.activeContent) {
            this.setState({ activeContent: nextProps.activeContent });
        }
    }

    render() {
        const activeContent = this.state.activeContent;
        function contentToRender() {
            if (activeContent.bet) {
                return <Bet />;
            }
            else if (activeContent.table) {
                return <Table />;
            }
            else if (activeContent.contact) {
                return <Contact />;
            }
            else if (activeContent.faq) {
                return <FAQ />;
            }
            else {
                return <Home />;
            }
        }
        return (
            <div className="content-container">
                {contentToRender()}
            </div>
        );
    }
}

export default Content;