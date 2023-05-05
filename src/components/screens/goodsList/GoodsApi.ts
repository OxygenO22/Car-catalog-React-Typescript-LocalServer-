import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IGoodsList } from "./GoodsTypes";

export const GoodsApi = createApi({
  reducerPath: "goodsApi",
  tagTypes: ["Goods"],
  baseQuery: fetchBaseQuery({baseUrl: "http://localhost:3001/"}),
  endpoints: build => ({
    getGoods: build.query<IGoodsList[], string>({
      query: (limit = "") => `goods?${limit && `_limit=${limit}`}`,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Goods" as const, id })),
              { type: "Goods", id: 'LIST' },
            ]
          : [{ type: "Goods", id: 'LIST' }],
    }),
    addGood: build.mutation({
      query: body => ({
        url: "goods",
        method: "POST",
        body
      }),
      invalidatesTags: [{ type: "Goods", id: 'LIST' }]
    }),
    deleteGood: build.mutation({
      query: id => ({
        url: `goods/${id}`,
        method: "DELETE"
      }),
      invalidatesTags: [{ type: "Goods", id: 'LIST' }]
    })
  })
});

export const {useGetGoodsQuery, useAddGoodMutation, useDeleteGoodMutation} = GoodsApi;
