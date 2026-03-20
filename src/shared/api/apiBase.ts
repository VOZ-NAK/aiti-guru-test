import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { tokenService } from '@/shared/lib/tokenService';

import { ApiTags } from './apiTags';

export const apiBase = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://dummyjson.com',
    prepareHeaders: (headers) => {
      const token = tokenService.getToken();
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: Object.values(ApiTags),
  endpoints: () => ({}),
});
