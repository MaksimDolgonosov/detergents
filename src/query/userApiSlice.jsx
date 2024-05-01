import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userApiSlice = createApi({
    reducerPath: 'apiUser',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001' }),
    // baseQuery: fetchBaseQuery({ baseUrl: 'https://node.webmaks.site' }),
   // tagTypes: ["basket"],
    endpoints: (builder) => ({
        getUser: builder.query({
            query: (id) => `/api/users/${id}`,
           // providesTags: ["basket"],
            //invalidatesTags: ["basket"]
        }),
        addUser: builder.mutation({
            query: (user) => ({
                url: `/api/users/`,
                method: 'POST',
                body: user,
            }),
            invalidatesTags: []
        }),
        setUserData: builder.mutation({
            query: ({ userId, currentData }) => ({
                url: `/api/users/${userId}`,
                method: 'PATCH',
                body: {
                    name: currentData.name,
                    surname: currentData.surname,
                    tel: currentData.tel
                },
                headers: {
                    'Content-Type': 'application/json'
                    // Заголовки
                }
            }),
        }),
        // addBasket: builder.mutation({
        //     query: ({ userId, currentBasket }) => {
        //         // console.log(currentBasket);
        //         return {
        //             url: `/api/users/basket/${userId}`,
        //             method: 'PATCH',
        //             body: { basket: currentBasket },
        //             headers: {
        //                 'Content-Type': 'application/json'
        //                 // Заголовки
        //             }
        //         }
        //     },
        //     // providesTags: ["basket"],
        //     invalidatesTags: ["basket"]
        // }),
        // setBasketQuantity: builder.mutation({
        //     query: ({ userId, itemId, quantity }) => {
        //         console.log(itemId, quantity);
        //         return {
        //             url: `/api/users/basketQuantity/${userId}`,
        //             method: 'PATCH',
        //             body: { itemId, quantity },
        //             headers: {
        //                 'Content-Type': 'application/json'
        //                 // Заголовки
        //             }
        //         }
        //     },
        //     // providesTags: ["basket"],
        //     invalidatesTags: ["basket"]
        // }),
        addHistory: builder.mutation({
            query: ({ userId, currentHistory }) => ({
                url: `/api/users/${userId}`,
                method: 'PATCH',
                body: { history: currentHistory },
                headers: {
                    'Content-Type': 'application/json'
                    // Заголовки
                }
            }),
            // providesTags: ["basket"],
            // invalidatesTags: ["basket"]
        }),

    }),
})

export const { useGetUserQuery, useLazyGetUserQuery, useAddUserMutation, useAddHistoryMutation, useSetUserDataMutation } = userApiSlice;