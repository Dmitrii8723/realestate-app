import React, {Component} from 'react';
import {Link} from "react-router-dom";

class SearchBar extends Component {
    render() {
        return (
            <div className="search">
                <ul>
                    <li className="firstinlist">
                        <Link to="#">Buy</Link>
                    </li>
                    <li>
                        <Link to="#">Sell</Link>
                    </li>
                    <li>
                        <a href="#">Estimate</a>
                    </li>
                </ul>
                <div className="subsearch">
                    <ul>
                        <li>
                            <a href="#">#</a>
                        </li>
                        <li>
                            <input type="text" placeholder="Enter a neighborhood"/>
                        </li>

                    </ul>
                </div>
            </div>
        );
    }
}

export default SearchBar;
