import React, { Component } from "react";

class Loader extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="loader-container">
                <div className="spinner-container">
                    <i className="fas fa-spinner fa-spin"></i>
                    <span>LOADING</span>
                </div>
            </div>
            
        );
    }
}

export default Loader;