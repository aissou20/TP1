import React from 'react';
import PropTypes from 'prop-types';



class PeopleItem extends React.Component {


    render() {
        return (
            <> 
             <tr>
                <td>{this.props.perso.gender}</td>
                <td>{this.props.perso.name}</td>
                <td>{this.props.perso.birth_year} </td>
            </tr>
            </>
        )
    }
}

export default PeopleItem;

PeopleItem.propTypes = {
    perso:PropTypes.object,
  };




