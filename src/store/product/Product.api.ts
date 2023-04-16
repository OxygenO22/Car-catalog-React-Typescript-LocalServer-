import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IProduct } from "./Product.type";

export const productApi = createApi({
  reducerPath: "api/products",
  baseQuery: fetchBaseQuery({baseUrl: "https://fakestoreapi.com/"}),
  endpoints: build => ({
    getProducts: build.query<IProduct[], number>({query: (limit = 6) => `products?limit=${limit}`})
  })
})

export const {useGetProductsQuery} = productApi;