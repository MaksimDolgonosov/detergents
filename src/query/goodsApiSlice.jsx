import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const goodsApiSlice = createApi({
    reducerPath: 'apiGoods',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001' }),
    tagTypes: [],
    endpoints: (builder) => ({
        getAllGoods: builder.query({
            query: () => `/goods/`,
            providesTags: []
        }),
        // addUser: builder.mutation({
        //     query: (user) => ({
        //         url: `users/`,
        //         method: 'POST',
        //         body: user,
        //     }),
        //     invalidatesTags: []
        // }),
    }),
})

export const { useGetAllGoodsQuery } = goodsApiSlice;