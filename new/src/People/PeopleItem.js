import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import {connect} from 'react-redux';
import {isLiked} from '../store/StarWarsLike'

// http://swapi.dev/api/people/1/
function getIDFromUrl(url){
    const withoutPrefix = url.replace("http://swapi.dev/api/people/", "")
    return withoutPrefix.replace("/", "");
}

class PeopleItem extends React.Component {


    render() {
        return (
            <> 
             <tr>
                <td>{this.props.perso.gender}</td>
                <td>
                    <Link to={"../person/"+getIDFromUrl(this.props.perso.url)}>
                        {this.props.perso.name}
                    </Link>
                    </td>
                <td>{this.props.perso.birth_year} </td>
                <td>
                    <button class="button" 
                    onClick={()=>this.props.like(this.props.perso)}
                    disabled={this.props.isLiked}
                    >
                    
                        <span>like</span>
                    </button>

                    <button class="button" 
                    onClick={()=>this.props.dislike(this.props.perso)}
                    disabled={!this.props.isLiked}
                    >
                        <span>dislike</span>
                    </button>
                </td>
            </tr>
            </>
        )
    }
}


PeopleItem.propTypes = {
    perso:PropTypes.object,
  };


  const mapDispatchToProps =(dispatch)=>{
      return {
          like:(p)=>{
              dispatch({ type:"LIKE",payload:p});

          },
          dislike:(p)=>{
            dispatch({ type:"DISLIKE",payload:p});

        }
      }
  }
  const mapStateToProps =(state , props) =>{
      return {
          isLiked: isLiked(state , props.perso)
      }
  }

export default connect(mapStateToProps, mapDispatchToProps)(PeopleItem);


  //export default connect(mapStateToProps, mapDispatchToProps)(PeopleItem);




