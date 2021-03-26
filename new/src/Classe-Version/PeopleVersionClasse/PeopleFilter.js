import React from "react";
import PropTypes from 'prop-types';



class PeopleFilter extends React.Component{

    render(){
        return(
            <div className="field">
            <div className="control">
              <input className="input is-info" type="text" onChange={event => this.props.onFilter(event.target.value)} />
              </div>
            </div>
        );
    }
}

export default PeopleFilter;

PeopleFilter.propTypes = {
    onFilter: PropTypes.func,
}