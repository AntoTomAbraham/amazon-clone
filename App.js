import React, {useEffect} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import { useStateValue } from './StateProvider';
import {auth} from './Firebase';
function App() {
  const [{ user }, dispatch]=useStateValue();


  useEffect(() => {
    const unsubscribe=auth.onAuthStateChanged((authUser)=>{
    if(authUser){
      dispatch({
        type:"set_user",
        user:authUser
      })
    }
    else{
      dispatch({
        type:"set_user",
        user:null
      })      
    }
    return ()=>{
      unsubscribe();
    }
  })}, [])



  return (
    <Router>
    <div className="app">
      <Switch>
        <Route path="/checkout">
        <Header />
          <Checkout />
        </Route>
        <Route path="/Login">
          <Login />
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
