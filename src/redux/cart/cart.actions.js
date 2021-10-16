import { CardActionTypes } from "./cart.types"

export const toggleCartHidden = ( payload ) => ( {
  type: CardActionTypes.TOGGLE_CART_HIDDEN,
  payload
} )
