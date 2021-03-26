import {React ,useState,useEffect} from 'react';
import {useParams , useHistory} from 'react-router-dom';




export default function Person (){

    const [person , setPerson] = useState({});
    const {id} = useParams();
    const history =useHistory();

 

    useEffect(() => {
        fetch("https://swapi.dev/api/people/"+id)
        .then((response) => response.json())
        .then((person) => {setPerson(person); });
    }, [id]);

    const previous = ()=>{
        const previousID = parseInt(id) -1;
        history.push('/person/'+previousID)
    }

    const next = ()=>{
        const nextID = parseInt(id) +1;
        history.push('/person/'+nextID);
    }


    return(
        <div>
            <p> {person.name} </p>
            <button onClick={previous}> Previous </button>
            <button onClick={next}> Next </button>
        </div>
    )
}

