import React ,{ Component} from "react";
import "./App.css";
import PeopleFilter from './People/PeopleFilter';
import PeopleTable from './People/PeopleTable';

//const componentWithTitle = withTitle(Component, 'Titre de la page');

class App extends React.Component {

  constructor(){
    super();
    this.state ={
      searchTerm:'',
      people: [],
      loading:false,
    }
  }

  componentDidMount(){
    this.setState({loading:true})
    fetch("https://swapi.dev/api/people/")
    .then(response =>response.json())
    .then(response =>this.setState({
      people:response.results,
      loading:false
    }));
  
  }

  render(){
    console.log(this.state.people)
    const {searchTerm, people} =this.state;

    const peopleFiltered = people.filter( perso => perso.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()));
    if (this.state.loading) {
      return (
      <progress className="progress is-small is-primary" max="100"></progress>
      );
      }
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
