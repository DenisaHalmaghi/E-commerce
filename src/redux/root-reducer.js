import cart from "./cart/cart.reducer"
import { combineReducers } from "redux"
import user from "./user/user.reducer"

export default combineReducers( {
  user,
  cart,
} )