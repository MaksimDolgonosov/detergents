import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const categoriesApiSlice = createApi({
    reducerPath: 'apiCategories',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/api' }),
    tagTypes: [],
    endpoints: (builder) => ({
        getAllCaregories: builder.query({
            query: () => `/categories/`,
            providesTags: []
        }),

    }),
})

export const { useGetAllCaregoriesQuery } = categoriesApiSlice;