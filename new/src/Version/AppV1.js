import React from "react";
import "./App.css";
import starWarsperso from './StarWarsData'

class App extends React.Component {

  constructor(){
    super();

    this.state ={
      searchTerm:''
    }
  }
  
  handleChange = (event)=>{
    this.setState({
      searchTerm : event.target.value,
    });
  }

  render(){
    const peopleFiltered = starWarsperso.filter( perso => perso.name.toLocaleLowerCase().includes(this.state.searchTerm.toLocaleLowerCase()));
    return (
      <section className="section">
        <div className="container">
          <h1 className="title">Personnage Star wars</h1>
          <p className="subtitle">
            My first website with <strong>Bulma</strong>!
          </p>
          
          <div className="field">
            <div className="control">
              <input className="input is-info" type="text" onChange={this.handleChange}/>
              </div>
            </div>
  
          <table className="table is-fullwidth">
            <thead>
              <tr>
                <th>Nom</th>
                <th>Genre</th>
                <th>Année de naissance</th>
              </tr>
            </thead>
            <tbody>
              {peopleFiltered.map((perso,index) =>{
                return <tr key={index}>
                  <td>{perso.gender}</td>
                  <td>{perso.name}</td>
                  <td>{perso.birth_year} </td>
                  </tr>
              })
              }
            </tbody>
          </table>
        </div>
      </section>
    );
  }
 
}
export default App;
