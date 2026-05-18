import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {API_BASE_URL} from "@constants/API.js";

export const baseApi = createApi({
    reducerPath: 'api',

    baseQuery: fetchBaseQuery({
        baseUrl: API_BASE_URL,
    }),

    tagTypes: ['Products', 'Cart', 'Auth', 'Banner', 'Categories'],

    endpoints: (builder) => ({
        getProducts: builder.query({
            query: ({limit, skip, search, category, sortBy, order = 'desc', select}) => {
                let url = '/products';

                if (search) {
                    url += `/search?q=${search}`;
                }

                if (category) {
                    url += `/category/${category}`;
                }

                const params = new URLSearchParams();

                if (limit) params.append('limit', limit);
                if (skip) params.append('skip', skip);
                if (sortBy) params.append('sortBy', sortBy);
                if (order) params.append('order', order);
                if (select) params.append('select', select);

                const queryString = params.toString();

                return queryString ? `${url}?${queryString}` : url;
            }, providesTags: ['Products'],
        }),

        getProductById: builder.query({
            query: (id) => `/products/${id}`, providesTags: (result, error, id) => [{type: 'Products', id},],
        }),

        getCategoryList: builder.query({
            query: () => 'https://dummyjson.com/products/category-list', providesTags: ['Categories'],
        })

    }),
});
export const { useGetProductsQuery, useGetProductByIdQuery, useGetCategoryListQuery } = baseApi;