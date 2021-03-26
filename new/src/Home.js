import React  from "react";
import "./App.css";
import PeopleFilter from './People/PeopleFilter';
import PeopleTable from './People/PeopleTable';
import { useState, useEffect } from 'react';
import {getAllLikesCount} from './store/StarWarsLike'
import {connect } from 'react-redux';

function Home({count}){

    const [searchTerm ,setSearchTerm]=useState('');
    const [people, setPeople] = useState([]);
    const [loading ,setLoading] = useState(false);
    const [nextPage ,setNextPage] = useState(null);
    const [previousPage , setPreviousPage] = useState(null);
  
    //const [response, loading] = useFetch();
    //using use fetch 
    
    useEffect(() => {
      if (loading) {
        return (
        <progress className="progress is-small is-primary" max="100"></progress>
        );
      }
      //setLoading(true);
      fetchPeopleData("https://swapi.dev/api/people/");
      //setLoading(false);
      // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);
  
  
  
    const fetchPeopleData = (url) => {
      setLoading(true);
      fetch(url)
        .then((response) => response.json())
        .then((response) => {
            console.log(response);
          setPeople(response.results);
          setNextPage(response.next);
          setPreviousPage(response.previous);
          
        });
        setLoading(false);
    };
  
    const fetchNextPage =()=>{
      fetchPeopleData(nextPage);
      console.log('nextPage')
    }
  
    const fetchPreviousPage = () =>{
      fetchPeopleData(previousPage);
    }
  
    
  
  
  
  const peopleFiltered = people.filter( perso => perso.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()));
  
  return(
  
    <div>
      <section className="section">
          <div className="container">
          
            <h1 className="title">Personnage Star wars</h1>
            <h2>Vous aimez {count} personnages</h2>
            <p className="subtitle">
              My second website with <strong>Hooks</strong>!
            </p>
            
            <PeopleFilter onFilter={value => setSearchTerm(value)}/>
            <PeopleTable people={peopleFiltered} />
            <p>
              <button disabled={!previousPage} onClick={() =>fetchPreviousPage()}> Previous</button>
              <button disabled={!nextPage} onClick={() => fetchNextPage()}> Next</button>
  
            </p>
          </div>
        </section>
    </div>
  )
  
}

const mapStateToProps = state =>{
    return{
      count: getAllLikesCount(state)
    }
}

export default connect(mapStateToProps)(Home);

