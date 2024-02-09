import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userApiSlice = createApi({
    reducerPath: 'apiUser',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001' }),
    tagTypes: [],
    endpoints: (builder) => ({
        getUser: builder.query({
            query: (id) => `/users/${id}`,
            providesTags: []
        }),
        addUser: builder.mutation({
            query: (user) => ({
                url: `users/`,
                method: 'POST',
                body: user,
            }),
            invalidatesTags: []
        }),
    }),
})

export const { useGetUserQuery, useAddUserMutation } = userApiSlice;