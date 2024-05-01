import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const basketApiSlice = createApi({
    reducerPath: 'apiBasket',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001' }),
    // baseQuery: fetchBaseQuery({ baseUrl: 'https://node.webmaks.site' }),
    tagTypes: ["basket"],
    endpoints: (builder) => ({
        // getBasket: builder.query({
        //     query: (userId) => `/api/getBasket/${userId}`,
        //    // providesTags: ["basket"],
        //     //invalidatesTags: ["basket"]
        // }),
        // getBasket: builder.query({
        //     query: (id) => {
        //         console.log(id);
        //         return `/api/basket/${id}
        //     `},
        //     // providesTags: ["basket"],
        //     //invalidatesTags: ["basket"]
        // }),


        getFullBasket: builder.query({
            query: (userId) => `/api/basket/getFullBasket/${userId}`,
            providesTags: ["basket"]
        }),

        addBasket: builder.mutation({
            query: ({ userId, newItem }) => {
                console.log(newItem);
                return {
                    url: `/api/basket/addBasket/${userId}`,
                    method: 'PATCH',
                    body: newItem,
                    headers: {
                        'Content-Type': 'application/json'
                        // Заголовки
                    }
                }
            },
            invalidatesTags: ["basket"]
        }),
        setBasketQuantity: builder.mutation({
            query: ({ userId, itemId, quantity }) => {
                console.log(itemId, quantity);
                return {
                    url: `/api/basket/basketQuantity/${userId}`,
                    method: 'PATCH',
                    body: { itemId, quantity },
                    headers: {
                        'Content-Type': 'application/json'
                        // Заголовки
                    }
                }
            },
            invalidatesTags: ["basket"]
        }),
        // removeFromBasket: builder.mutation({
        //     query: ({ userId, currentHistory }) => ({
        //         url: `/api/users/${userId}`,
        //         method: 'PATCH',
        //         body: { history: currentHistory },
        //         headers: {
        //             'Content-Type': 'application/json'
        //             // Заголовки
        //         }
        //     }),
        //     // providesTags: ["basket"],
        //     // invalidatesTags: ["basket"]
        // }),

    }),
})

export const { useSetBasketQuantityMutation, useAddBasketMutation, useGetFullBasketQuery } = basketApiSlice;