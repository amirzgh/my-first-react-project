import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./features/Cart/CartSlice";


export default configureStore({
    reducer:{
        cart : CartSlice,
    }
})