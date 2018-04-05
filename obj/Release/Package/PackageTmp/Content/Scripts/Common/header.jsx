import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Header extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="header-container">
                <h1>THE BET</h1>
            </div>
        );
    }
}

export default Header;