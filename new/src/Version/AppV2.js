import React ,{ Component} from "react";
import "./App.css";
import starWarsperso from './StarWarsData';
import PeopleFilter from './People/PeopleFilter';
import PeopleTable from './People/PeopleTable';

//const componentWithTitle = withTitle(Component, 'Titre de la page');

class App extends React.Component {

  constructor(){
    super();
    this.state ={
      searchTerm:'',
      people: [],
    }
  }

  componentDidMount(){
    fetch("https://swapi.dev/api/people/")
    .then(response =>response.json())
    .then(response =>this.setState({people :response}));

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
          
          <PeopleFilter onFilter={value => this.setState({searchTerm:value})}/>
          <PeopleTable people={peopleFiltered} />
        </div>
      </section>
    );
  }
 
}
export default App;
