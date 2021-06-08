import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Header from '../Components/NavigationBar/Header';
import HomePage from "../Components/HomePage/HomePage";
import Checkout from "../Checkout/Checkout";
import Login from "../Components/LoginPage/Login";


function App() {
  return (
      <Router>
          <div className="App">
             <Switch>
                 <Route path='/checkout'>
                     <Header/>
                     <h1><Checkout/></h1>
                 </Route>
                 <Route path='/login'>
                     <Login/>
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
