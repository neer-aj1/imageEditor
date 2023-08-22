import { apiSlice } from './apiSlice';

export const userApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        register: builder.mutation({
            query: (data) => ({
                url: '/imageEditor/register',
                method: 'POST',
                body: data,
            }),
        }),
        login: builder.mutation({
            query: (data) => ({
                url: '/imageEditor/login',
                method: 'POST',
                body: data,
            }),
        }),
        logout: builder.mutation({
            query: (data) => ({
                url: '/imageEditor/logout',
                method: 'POST',
            }),
        }),
    }),
});

export const { useRegisterMutation, useLoginMutation, useLogoutMutation} = userApiSlice