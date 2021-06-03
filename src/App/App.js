import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Header from '../Components/NavigationBar/Header';

function App() {
  return (
      <Router>
          <div className="App">
             <Switch>
                 <Route path='/checkout'>
                     <h1>Checkout</h1>
                 </Route>
                 <Route path='/login'>
                     <h1>Login Page</h1>
                 </Route>
                 //Default Route Page
                 <Route path='/'>
                     <Header/>
                     <h1>hello</h1>
                 </Route>
             </Switch>
          </div>

      </Router>



  );
}

export default App;
