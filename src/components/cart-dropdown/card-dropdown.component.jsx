import "./card-dropdown.styles.scss";

import CustomButton from "../custom-button/custom-button.component";
import React from "react";
import { connect } from "react-redux";

function CartDropdown({ hidden }) {
  return hidden ? null : (
    <div className="cart-dropdown">
      <div className="cart-items">
        <CustomButton>GO TO CHECKOUT</CustomButton>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  hidden: state.cart.hidden,
});

export default connect(mapStateToProps)(CartDropdown);
