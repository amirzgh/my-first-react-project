import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems : [],
    cartTotalItems : 0,
    cartTotalPrice : 0
}

const cartSlice = createSlice({
    name : 'cart',
    initialState,
    reducers:{
        addToCart(state, action){
            const index = state.cartItems.findIndex((item) => item.id === action.payload.id)
            if (index>=0){
                state.cartItems[index] ={
                    ...state.cartItems[index],
                    quantity : state.cartItems[index].quantity+= 1
                }
            }else {
                let tempProductItem = { ...action.payload, quantity: 1 };
                state.cartItems.push(tempProductItem);
            }
            state.cartTotalItems+=1
            state.cartTotalPrice+= action.payload.default_variant.price.selling_price          
        },
        decreaseFromCart(state,action){
            const index = state.cartItems.findIndex((item) => item.id === action.payload.id)
            if (state.cartItems[index].quantity>1) {
                state.cartItems[index].quantity-= 1
            }else {
                state.cartItems.filter( item => item.id !== action.payload.id)
            }
            state.cartTotalItems-=1
            state.cartTotalPrice-= action.payload.default_variant.price.selling_price
        },
        getCart(state,action){
            let {total,quantity} = state.cartItems.reduce(
                (cartTotal, cartItem) =>{
                    const {price,cartQuantity} = cartItem;
                    const itemTotal = price * cartQuantity;

                    cartTotal.total += itemTotal;
                    cartTotal.quantity += cartQuantity
                    return cartTotal
                },
                {
                    total : 0,
                    quantity : 0
                },
                )
                state.cartTotalItems = quantity;
                state.cartTotalPrice = total;
        },
        clearCart(state){
            state.cartItems = []
            state.cartTotalItems = 0
            state.cartTotalPrice = 0
        }
    }
})

export const {addToCart, decreaseFromCart, clearCart, getCart} = cartSlice.actions;

export default cartSlice.reducer