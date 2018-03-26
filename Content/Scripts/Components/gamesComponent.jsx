import React, { Component } from "react";
import Moment from "moment";
 

class GamesComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            games: this.props.games
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.games !== this.props.games) {
            this.setState({ games: nextProps.games });
        }
    }

    render() {
        var games = this.state.games;
        var listItems = games.map((game) =>
            <li key={game.gameId}>
                <div className="game-info">
                    <span>{game.stage} - {Moment(game.gameTime).format("YYYY-MM-DD HH:mm")}</span>
                </div>
                <div className="teams-container">
                    <div className="team-container">
                        <label htmlFor={'team1-' + game.gameId}>{game.team1Name}</label>
                        <i className={'flag before ' + game.team1Name}></i>
                        <input type="number" className="tb-input" id={'team1-' + game.gameId} name="team1" max="20" />
                    </div>
                    <span className="vs-span">-</span>
                    <div className="team-container">
                        <input type="number" className="tb-input" id={'team2-' + game.gameId} name="team2" max="20" />
                        <i className={'flag after ' + game.team2Name}></i>
                        <label htmlFor={'team2-' + game.gameId}>{game.team2Name}</label>
                    </div>
                </div>
                {/*<div className="game-info">
                    <p className="date">{Moment(game.gameTime).format("YYYY-MM-DD HH:mm")}</p>
                    <p className="stage">{game.stage}</p>
                </div>
                <div className="teams-container">
                    <div className="team-container">
                        <label htmlFor="team1-bet">{game.team1Name}</label>
                        <input type="number" className="tb-input" id="team1-bet" name="team1" max="20" />
                    </div>
                    <div className="vs-container">
                        <p>-</p>
                        <p className="large-vs">-</p>
                    </div>
                    <div className="team-container">
                        <label htmlFor="team2-bet">{game.team2Name}</label>
                        <input type="number" className="tb-input" id="team2-bet" name="team2" max="20" />
                    </div>
                </div>*/}
            </li>
        );
        return (
            <div className="games-container">
                <ul className="games-list">
                    {listItems}
                </ul>
            </div>
        );
    }
}

export default GamesComponent;