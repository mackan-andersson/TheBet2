import React, { Component } from "react";
import Moment from "moment";
 

class Games extends Component {
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

    onInputChangeTeam1(index, event) {
        var tempGames = this.state.games.slice();
        tempGames[index].userTeam1Goals = event.target.value;
        this.setState({ games: tempGames });
        this.props.updateUserBet(tempGames);
    }

    onInputChangeTeam2(index, event) {
        var tempGames = this.state.games.slice();
        tempGames[index].userTeam2Goals = event.target.value;
        this.setState({ games: tempGames });
        this.props.updateUserBet(tempGames);
    }

    render() {
        var games = this.state.games;
        var listItems = games.map((game,idx) =>
            <li key={game.gameId}>
                <div className="game-info">
                    <span>{game.stage} - {Moment(game.gameTime).format("YYYY-MM-DD HH:mm")}</span>
                </div>
                <div className="teams-container">
                    <div className="team-container">
                        <label htmlFor={'team1-' + game.gameId}>{game.team1Name}</label>
                        <i className={'flag before ' + game.team1Name}></i>
                        <input type="number" className="tb-input" id={'team1-' + game.gameId} name="team1" max="20" disabled={!game.openForBet}
                            onChange={this.onInputChangeTeam1.bind(this, idx)} value={game.userTeam1Goals !== null ? game.userTeam1Goals : ''} />
                    </div>
                    <span className="vs-span">-</span>
                    <div className="team-container">
                        <input type="number" className="tb-input" id={'team2-' + game.gameId} name="team2" max="20" disabled={!game.openForBet}
                            onChange={this.onInputChangeTeam2.bind(this, idx)} value={game.userTeam2Goals !== null ? game.userTeam2Goals : ''} />
                        <i className={'flag after ' + game.team2Name}></i>
                        <label htmlFor={'team2-' + game.gameId}>{game.team2Name}</label>
                    </div>
                </div>
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

export default Games;