import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userApiSlice = createApi({
    reducerPath: 'apiUser',
   // baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001' }),
     baseQuery: fetchBaseQuery({ baseUrl: 'https://node.webmaks.site' }),
    tagTypes: ["history"],
    endpoints: (builder) => ({
        getUser: builder.query({
            query: (id) => `/api/users/${id}`,

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
                url: `/api/usersData/${userId}`,
                method: 'PATCH',
                body: {
                    name: currentData.name,
                    surname: currentData.surname,
                    tel: currentData.tel
                },
                headers: {
                    'Content-Type': 'application/json'
                }
            }),
        }),
        getHistory: builder.query({
            query: (id) => `/api/getHistory/${id}`,
            providesTags: ["history"]
        }),
        addHistory: builder.mutation({
            query: ({ userId, id, orderData, date }) => ({
                url: `/api/addHistory/${userId}`,
                method: 'POST',
                body: { id, orderData, date },
                headers: {
                    'Content-Type': 'application/json'
                    // Заголовки
                }
            }),
            invalidatesTags: ["history"]
        }),

    }),
})

export const { useGetUserQuery, useLazyGetUserQuery, useAddUserMutation, useAddHistoryMutation, useSetUserDataMutation, useGetHistoryQuery } = userApiSlice;