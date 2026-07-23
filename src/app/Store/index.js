import { configureStore } from '@reduxjs/toolkit';
import { baseApi } from '@app/API/baseApi.js';
import cartReducer from '@features/cart/cartSlice.js';

export const store = configureStore({
    reducer: {
        [baseApi.reducerPath]: baseApi.reducer,
        cart: cartReducer,
    },

    middleware: getDefaultMiddleware => {
        return getDefaultMiddleware().concat(baseApi.middleware)
    }
})

// Persist cart to localStorage
store.subscribe(() => {
    try {
        const state = store.getState();
        const cart = state?.cart?.items || [];
        localStorage.setItem('cart', JSON.stringify(cart));
    } catch (e) {
        // ignore storage errors
    }
});