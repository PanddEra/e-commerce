import { configureStore } from '@reduxjs/toolkit';
import { baseApi } from '@app/API/baseApi.js';

export const store = configureStore({
    reducer: {
        [baseApi.reducerPath]: baseApi.reducer,
    },

    middleware: getDefaultMiddleware => {
        return getDefaultMiddleware().concat(baseApi.middleware)
    }
})