import React, {Component} from 'react';
import {Link} from "react-router-dom";
import PropertyList from '../../containers/property-list';

class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.input = React.createRef();
        this.state={var: null}
    }



    pass(){
        this.setState({var: this.input.current.value})

         console.log('What is it? :' + this.state.var)
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
                            <a onClick={() => this.pass()}>Search</a>
                        </li>
                        <li>
                            <input type="text" ref={this.input} placeholder={this.props.placeholder} />
                        </li>
                    </ul>
                    <PropertyList val={this.state.var}/>
                </div>

            </div>

        );
    }
}

export default SearchBar;