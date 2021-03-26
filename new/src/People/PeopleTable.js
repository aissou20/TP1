import React from "react";
import starWarsperso from '../StarWarsData'
import PropTypes from 'prop-types';
import PeopleItem from "./PeopleItem";




class PeopleTable extends React.Component {

    constructor(props){
        super(props);
        this.state = {
        
        }
    }

    render(){
        return (
            <div>
                <table className="table is-fullwidth">
                    <thead>
                        <tr>
                            <th>Nom</th>
                            <th>Genre</th>
                            <th>Année de naissance</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.props.people.map((person) => <PeopleItem key ={person.url} perso={person}/>) }
                    </tbody>
                </table>
            </div>

        );
    }
}
export default PeopleTable; 

PeopleTable.propTypes={
    people: PropTypes.array,
}