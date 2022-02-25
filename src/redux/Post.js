
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const postApi = createApi({
  reducerPath: 'postApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
  endpoints: (builder) => ({
    getAllPost: builder.query({
      query: () => ({
          url:"posts",
          method: 'GET',
      }),

    }),
    getAllPostById: builder.query({
      query: (id) => ({
          url:`posts/${id}` ,
          method: 'GET',
      }),

    }),
    AddPost: builder.mutation({
      query: (post) => ({
          url:"posts" ,
          method: 'POST',
          body: post,
      }),

    }),
    
    UpdatePost: builder.mutation({
      query: ({id , ...post}) => ({
          url:`posts/${id}` ,
          method: 'PUT',
          body: post,
      }),

    }),
    DeletePost: builder.mutation({
      query: (id) => ({
          url:`posts/${id}` ,
          method: 'DELETE',
      }),

    }),
  })
})


export const { useGetAllPostQuery, useGetAllPostByIdQuery, useAddPostMutation,useUpdatePostMutation, useDeletePostMutation} = postApi