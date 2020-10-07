import { ADD_TO_CART, REMOVE_FROM_CART } from '../types/productTypes';

const INITIAL_STATE = {
  cart: [],
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };

    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter(items => items.id !== action.payload.id),
      };
    default:
      return state;
  }
};

export default reducer;
