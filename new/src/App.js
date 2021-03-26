import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './Home';
import Person from './Person';
import store from './store/index';
import { Provider } from 'react-redux'


function App(){

  return(
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/person/:id"> <Person/> </Route>
          <Route path="/"> <Home/> </Route>
        </Switch>
      </BrowserRouter>
    </Provider>
    
  )
  
}
export default App;
