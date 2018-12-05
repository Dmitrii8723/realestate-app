import React, {Component} from 'react';
import SearchBar from "../searchBarComponent/search";
import backgroundImage from '../../Assets/images/background.png';

class Homepage extends Component {
    render() {
        return (
            <div className="homepage">
                <div id="background">
                    <img src={backgroundImage} className="stretch" alt=""/>
                </div>
                <h4>
                    Connecting people <br/> & property in Sydney
                </h4>

                <div className="searchinhomepage">
                    <SearchBar/>
                </div>

            </div>
        );
    }
}

export default Homepage;
