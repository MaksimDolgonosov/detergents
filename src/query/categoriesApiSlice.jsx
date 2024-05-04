import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const categoriesApiSlice = createApi({
    reducerPath: 'apiCategories',
    // baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001' }),
     baseQuery: fetchBaseQuery({ baseUrl: 'https://node.webmaks.site' }),
    endpoints: (builder) => ({
        getAllCaregories: builder.query({
            query: () => `/api/categories/`,
        }),

    }),
})

export const { useGetAllCaregoriesQuery } = categoriesApiSlice;