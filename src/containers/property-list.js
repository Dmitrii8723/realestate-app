import React, {Component} from 'react';
import {connect} from 'react-redux';
import SearchBar from "../components/searchBarComponent/search";

class PropertyList extends Component {

    createListItems() {
        return this.props.properties.map((property) => {
            return (
                <div className="propertiesavailable">
                    <nav>
                        <li key={property.id}>
                            <img src={property.photo} className="propertiesavaliableimage"/>
                            <h2>Neighborhood: {property.neighborhood}</h2>
                            <h3>Address: {property.address}</h3>
                            <h3>Description: {property.description} </h3>

                        </li>
                    </nav>
                </div>
            );
        });
    }

    // newFunction() {
    //     return (
    //         <SearchBar passedFunction={this.createListItems}/>
    //     );
    // }

    render() {
        return (
            this.createListItems()
      //  this.newFunction()
        );
    }


}

function mapStateToProps(state) {
    return {
        properties: state.properties

    };

}

export default connect(mapStateToProps)(PropertyList);