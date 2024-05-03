import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const basketApiSlice = createApi({
    reducerPath: 'apiBasket',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001' }),
    // baseQuery: fetchBaseQuery({ baseUrl: 'https://node.webmaks.site' }),
    tagTypes: ["basket"],
    endpoints: (builder) => ({

        getFullBasket: builder.query({
            query: (userId) => `/api/basket/getFullBasket/${userId}`,
            providesTags: ["basket"]
        }),

        addBasket: builder.mutation({
            query: ({ userId, newItem }) => {
                //console.log(newItem);
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
        removeFromBasket: builder.mutation({
            query: ({ userId, itemId }) => ({
                url: `/api/basket/removeFromBasket/${userId}`,
                method: 'DELETE',
                body: { itemId },
                headers: {
                    'Content-Type': 'application/json'
                    // Заголовки
                }
            }),
            invalidatesTags: ["basket"]
        }),

        clearBasket: builder.mutation({
            query: (id) => ({
                url: `/api/basket/clearBasket/${id}`,
                method: 'DELETE',
                // body: { itemId },
                // headers: {
                //     'Content-Type': 'application/json'
                //     // Заголовки
                // }
            }),
            invalidatesTags: ["basket"]
        }),

    }),
})

export const { useSetBasketQuantityMutation, useAddBasketMutation, useGetFullBasketQuery, useRemoveFromBasketMutation, useClearBasketMutation } = basketApiSlice;