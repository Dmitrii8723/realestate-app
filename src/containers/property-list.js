import React, {Component} from 'react';
import {connect} from 'react-redux';
import SearchBar from "../components/searchBarComponent/search";

class PropertyList extends Component {

    createListItems() {
        if (this.props.val) {
            return this.props.properties.map((property) => {
                if (this.props.val === property.neighborhood) {
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
                }
            });
        } else {
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
    }

    render() {
        return (
            this.createListItems()

        );
    }
}

function mapStateToProps(state) {
    return {
        properties: state.properties
    };
}

export default connect(mapStateToProps)(PropertyList);