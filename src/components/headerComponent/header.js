import React, {Component} from 'react';
import {
    Link
} from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <header>
                <div className="logo">
                </div>
                <nav>
                    <ul>
                        <li className="first">
                            <Link to="#">Buy a Home</Link>
                        </li>
                        <li>
                            <Link to="/sell">Sell a Home</Link>
                        </li>
                        <li>
                            <a href="#">Mortgage</a>
                        </li>
                        <li className="last">
                            <a href="#">Agents</a>
                        </li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default Header;
