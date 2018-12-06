import React, {Component} from 'react';
import {connect} from 'react-redux';

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