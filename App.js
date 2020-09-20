import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './Header';
import Home from './Home'
function App() {
  return (
    <Router>
    <div className="app">
      <Switch>
        <Route path="/checkout">
        <Header />
          <h1>checkout</h1>
        </Route>
        <Route path="/Login">
          <h1>Login</h1>
        </Route>
        <Route path="/">
          <Header />
          <Home />
        </Route>
      </Switch>
    </div>

    </Router>
    
  );
}

export default App;