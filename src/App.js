import './App.css';

import React, { Component } from 'react'
import { Route, Switch } from 'react-router';
import { auth, storeUserIfNotAlreadyStored } from "./firebase/firebase.utils.js";

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx"
import { connect } from 'react-redux';
import { onAuthStateChanged } from "firebase/auth";
import { onSnapshot } from "firebase/firestore";
import { setCurrentUser } from './redux/user/user.actions';

class App extends Component
{
  constructor ( props )
  {
    super( props )

    this.state = {
      user: null
    }
  }


  unsubscribe = null

  componentWillUnmount ()
  {
    this.componentWillUnmount()
  }

  componentDidMount ()
  {
    const { setCurrentUser } = this.props;

    this.unsubscribe = onAuthStateChanged( auth, async ( user ) =>
    {
      const userRef = await storeUserIfNotAlreadyStored( user )

      if ( !userRef )
      {
        return setCurrentUser( null )
      }

      onSnapshot( userRef, user =>
      {
        setCurrentUser( {
          id: user.id,
          ...user.data()
        } )
      } )
    } );
  }

  render ()
  {
    return (
      <div className="App" >
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

const mapDispatchToProps = ( dispatch ) =>
( {
  setCurrentUser: user => dispatch( setCurrentUser( user ) )
} );
export default connect( null, mapDispatchToProps )( App );
