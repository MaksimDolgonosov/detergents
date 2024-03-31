import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const categoriesApiSlice = createApi({
    reducerPath: 'apiCategories',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://test.webmaks.site/api' }),
    tagTypes: [],
    endpoints: (builder) => ({
        getAllCaregories: builder.query({
            query: () => `/categories/`,
            providesTags: []
        }),

    }),
})

export const { useGetAllCaregoriesQuery } = categoriesApiSlice;