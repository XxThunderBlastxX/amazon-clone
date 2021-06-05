import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Header from '../Components/NavigationBar/Header';
import HomePage from "../Components/HomePage/HomePage";

function App() {
  return (
      <Router>
          <div className="App">
             <Switch>
                 <Route path='/checkout'>
                     <Header/>
                     <h1>Checkout</h1>
                 </Route>
                 <Route path='/login'>
                     <h1>Login Page</h1>
                 </Route>
                 //Default Route Page
                 <Route path='/'>
                     <Header/>
                     <HomePage/>
                 </Route>
             </Switch>
          </div>

      </Router>



  );
}

export default App;
