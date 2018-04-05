import React, { Component } from "react";


class Deadlines extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="deadlines-container">
                <table>
                    <tr>
                        <th>For</th>
                        <th>Open</th>
                        <th>Closed</th>
                    </tr>
                    <tr>
                        <td>Group stage and questions</td>
                        <td>2018-06-04</td>
                        <td>2018-06-13</td>
                    </tr>
                    <tr>
                        <td>Pay to play for the prize</td>
                        <td>2018-06-04</td>
                        <td>2018-06-13</td>
                    </tr>
                    <tr>
                        <td>Round of 16</td>
                        <td>2018-29-06</td>
                        <td>An hour or two before the first round of 16 begins.</td>
                    </tr>
                    <tr>
                        <td>Quarterfinals</td>
                        <td>2018-07-04</td>
                        <td>2018-07-06</td>
                    </tr>
                    <tr>
                        <td>Semifinals</td>
                        <td>2018-07-08</td>
                        <td>2018-07-09</td>
                    </tr>
                    <tr>
                        <td>Game for third place and the final</td>
                        <td>2018-07-12</td>
                        <td>2018-07-13</td>
                    </tr>
                </table>
            </div>
        );
    }
}

export default Deadlines;