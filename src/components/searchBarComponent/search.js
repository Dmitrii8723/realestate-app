import React, {Component} from 'react';
import {Link} from "react-router-dom";
import PropertyList from '../../containers/property-list';

class SearchBar extends Component {


    pass(){
        this.props.passedFunction(this.refs.RefToSub.value)
    }

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
                            <a onClick={() => this.pass()}>#</a>
                        </li>
                        <li>
                            <input type="text" ref="RefToSub"/>
                        </li>
                    </ul>
                    <PropertyList/>
                </div>

            </div>

        );
    }
}

export default SearchBar;
