import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userApiSlice = createApi({
    reducerPath: 'apiUser',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001' }),
    tagTypes: ["basket"],
    endpoints: (builder) => ({
        getUser: builder.query({
            query: (id) => `/users/${id}`,
            providesTags: ["basket"],
            //invalidatesTags: ["basket"]
        }),
        addUser: builder.mutation({
            query: (user) => ({
                url: `users/`,
                method: 'POST',
                body: user,
            }),
            invalidatesTags: []
        }),
        addBasket: builder.mutation({
            query: ({ userId, currentBasket }) => ({
                    url: `users/${userId}`,
                    method: 'PATCH',
                    body: { basket: currentBasket },
                    headers: {
                        'Content-Type': 'application/json'
                        // Заголовки
                    }
                }),
            // providesTags: ["basket"],
            invalidatesTags: ["basket"]
        }),

    }),
})

export const { useGetUserQuery, useLazyGetUserQuery, useAddUserMutation, useAddBasketMutation, useGetBasketQuery } = userApiSlice;