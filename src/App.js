import logo from './logo.svg';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { Route, Switch } from 'react-router';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx"
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/firebase.utils.js";

import React, { Component } from 'react'

export default class App extends Component
{
  state = {
    user: null
  }

  unsubscribe = null

  componentWillUnmount ()
  {
    this.componentWillUnmount()
  }

  componentDidMount ()
  {
    this.unsubscribe = onAuthStateChanged( auth, ( user ) =>
    {
      this.setState( { user } )
    } );
  }

  render ()
  {
    return (
      <div className="App">
        <Header />

        <Switch>
          <Route exact path="/" component={ HomePage }></Route>
          <Route path="/shop" component={ ShopPage }></Route>
          <Route path="/signin" component={ SignInAndSignUp }></Route>
        </Switch>
      </div>
    );
  }
}
