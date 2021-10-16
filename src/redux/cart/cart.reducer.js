import { CardActionTypes } from "./cart.types"

const INTIAL_STATE = {
  hidden: true
}

const cartReducer = ( state = INTIAL_STATE, { type } ) =>
{
  switch ( type )
  {
    case CardActionTypes.TOGGLE_CART_HIDDEN:
      return { ...state, hidden: !state.hidden }

    default:
      return state
  }
}

export default cartReducer
