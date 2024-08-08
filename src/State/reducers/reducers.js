import { productList } from "../Action/actions";
import { Add_To_Cart, Remove_To_Cart, INCREASE_QUANTITY, DECREASE_QUANTITY, SET_SELECTED_IMAGE, Set_Products, FETCH_Products, CHECKOUT_SUCCESS, CLEAR_CART } from "../constant"
const initialState = {
    cartData: [],
    carttotal: 0
}
export default function cartItems(state, action) {
    if (!state) state = initialState;
    switch (action.type) {
        case Add_To_Cart:
            {
                return {
                    ...state,
                    cartData: [...state.cartData, action.data],
                    carttotal: state.carttotal + 1
                }
            }
        case Remove_To_Cart:

            if (Array.isArray(state.cartData) && state.cartData.length > 0) {
                return {
                    ...state,
                    cartData: state.cartData.slice(0, -1),
                    carttotal: state.carttotal > 0 ? state.carttotal - 1 : 0
                };
            } else {
                console.error("cartData is not an array or is empty:", state.cartData);
                return state;
            }
        case INCREASE_QUANTITY:
            return {
                ...state,
                cartData: state.cartData.map((item, index) =>
                    index === action.index ? { ...item, quantity: item.quantity + 1 } : item
                )
            };
        case DECREASE_QUANTITY:
            return {
                ...state,
                cartData: state.cartData.map((item, index) =>
                    index === action.index && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
                )
            };
        case SET_SELECTED_IMAGE:
            return {
                ...state,
                selectedImage: action.payload,
            };
        case FETCH_Products:

            return {
                ...state,

                products: action.payload,
            }
        case CHECKOUT_SUCCESS:
            return {
                ...state,
                cartData: []
            };

        case CLEAR_CART:
            return {
                ...state,
                cartData: []
            };

        default:
            return state
    }
}