import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const goodsApiSlice = createApi({
    reducerPath: 'apiGoods',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/api' }),
    tagTypes: ["goods"],
    endpoints: (builder) => ({
        getAllGoods: builder.query({
            query: () => `/goods/`,
            providesTags: ["goods"]
        }),
        // getAllFilters: builder.query({
        //     query: () => "/categories",
        //     invalidatesTags: []
        // }),
    }),
})

export const { useGetAllGoodsQuery } = goodsApiSlice;