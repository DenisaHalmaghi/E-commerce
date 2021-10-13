import './App.css';

import React, { Component } from 'react'
import { Route, Switch } from 'react-router';
import { auth, storeUserIfNotAlreadyStored } from "./firebase/firebase.utils.js";
import { doc, getFirestore } from "firebase/firestore";

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx"
import logo from './logo.svg';
import { onAuthStateChanged } from "firebase/auth";
import { onSnapshot } from "firebase/firestore";

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
    this.unsubscribe = onAuthStateChanged( auth, async ( user ) =>
    {
      const userRef = await storeUserIfNotAlreadyStored( user )

      if ( !userRef )
      {
        return this.setState( {
          user: null
        }, () => console.log( this.state ) )
      }

      onSnapshot( userRef, user =>
      {

        this.setState( {
          user: {
            id: user.id,
            ...user.data()
          }
        }, () => console.log( this.state ) )
      } )
    } );
  }

  render ()
  {
    return (
      <div className="App" >
        <Header signedInUser={ this.state.user } />

        <Switch>
          <Route exact path="/" component={ HomePage }></Route>
          <Route path="/shop" component={ ShopPage }></Route>
          <Route path="/signin" component={ SignInAndSignUp }></Route>
        </Switch>
      </div>
    );
  }
}
