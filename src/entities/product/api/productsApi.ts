import { apiBase } from '@/shared/api/apiBase';
import { ApiTags } from '@/shared/api/apiTags';

export interface IProduct {
  id: number;
  title: string;
  price: number;
  rating: number;
  brand: string;
  sku: string;
  thumbnail: string;
  category: string;
  description?: string;
  stock?: number;
}

export interface IProductsResponse {
  products: IProduct[];
  total: number;
  skip: number;
  limit: number;
}

export const productsApi = apiBase.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query<IProductsResponse, { limit: number; skip: number }>({
      query: ({ limit, skip }) => ({
        url: '/products',
        method: 'GET',
        params: { limit, skip },
      }),
      providesTags: [ApiTags.Products],
    }),

    searchProducts: builder.query<IProductsResponse, { q: string; limit: number; skip: number }>({
      query: ({ q, limit, skip }) => ({
        url: '/products/search',
        method: 'GET',
        params: { q, limit, skip },
      }),
      providesTags: [ApiTags.Products],
    }),
  }),
  overrideExisting: false,
});

export const { useGetProductsQuery, useSearchProductsQuery } = productsApi;
