import {baseApi} from '../../../services/baseApi';

export const productsApi = baseApi.injectEndpoints({
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
            query: (id) => `/products/${id}`,
            providesTags: (result, error, id) => [{type: 'Products', id},],
        }),

    }),
});