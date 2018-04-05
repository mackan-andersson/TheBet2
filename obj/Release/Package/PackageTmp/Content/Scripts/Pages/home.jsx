import React, { Component } from "react";
import Introduction from "../Components/introduction.jsx";

class Home extends Component {
    render() {
        return (
            <div className="home-container">
                <Introduction />
            </div>
        );
    }
}

export default Home;