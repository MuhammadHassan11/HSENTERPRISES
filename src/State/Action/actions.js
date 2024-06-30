import { Add_To_Cart, Remove_To_Cart, INCREASE_QUANTITY, DECREASE_QUANTITY, SET_SELECTED_IMAGE } from '../constant'

export const addToCart = (data) => {
    return {
        type: Add_To_Cart,
        data: data
    }
}

export const removeToCart = () => {
    return {

        type: Remove_To_Cart,



    }
}
export const increaseQuantity = (index) => ({
    type: INCREASE_QUANTITY,
    index
});

export const decreaseQuantity = (index) => ({
    type: DECREASE_QUANTITY,
    index
});
export const setSelectedImage = (imageUrl) => ({
    type: SET_SELECTED_IMAGE,
    payload: imageUrl,
});