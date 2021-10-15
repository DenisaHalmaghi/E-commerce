import "./header.styles.scss";

import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/svg/logo.svg";
import React from "react";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";

function Header({ signedInUser }) {
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>

        <Link className="option" to="/contact">
          CONTACT
        </Link>
        {signedInUser ? (
          <div className="option" onClick={() => auth.signOut(auth)}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGNIN
          </Link>
        )}
      </div>
    </div>
  );
}
const mapStateToProps = (state) => ({
  signedInUser: state.user.user,
});

export default connect(mapStateToProps)(Header);
