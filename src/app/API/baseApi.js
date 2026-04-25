import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {API_BASE_URL} from "@constants/API.js";

export const baseApi = createApi({
    reducerPath: 'api',

    baseQuery: fetchBaseQuery({
        baseUrl: API_BASE_URL,
    }),

    tagTypes: ['Products', 'Cart', 'Auth'],

    endpoints: (builder) => ({

        getProducts: builder.query({
            query: ({limit, skip, search, category, sortBy, order = 'desc'}) => {
                let url = '/products';

                if (search) {
                    url += `/search?q=${search}`;
                    return url;
                }

                if (category) {
                    url += `/category/${category}`;
                    return url;
                }

                const params = new URLSearchParams();

                if (limit) params.append('limit', limit);
                if (skip) params.append('skip', skip);
                if (sortBy) params.append('sortBy', sortBy);
                if (order) params.append('order', order);

                const queryString = params.toString();

                return queryString ? `${url}?${queryString}` : url;
            }, providesTags: ['Products'],
        }),

        getProductById: builder.query({
            query: (id) => `/products/${id}`, providesTags: (result, error, id) => [{type: 'Products', id},],
        }),

    }),
});
export const { useGetProductsQuery, useGetProductByIdQuery } = baseApi;