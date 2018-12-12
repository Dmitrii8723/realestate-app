import React, {Component} from 'react';
import {Link} from "react-router-dom";
import PropertyList from '../../containers/property-list';

class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.var = React.createRef();
    }

    pass(){
       this.setState(this.var)
        console.log('What is it? :' + this.var.current.value)
        this.props.createListItems(this.var.current.value)
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
                            <input type="text" ref={this.var}/>
                        </li>
                    </ul>
                    <PropertyList/>
                </div>

            </div>

        );
    }
}

export default SearchBar;
