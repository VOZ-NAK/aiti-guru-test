import { apiBase } from '@/shared/api/apiBase';
import { ApiTags } from '@/shared/api/apiTags';

import type { ILoginCredentials, ILoginResponse } from '../model/authTypes';

export const authApi = apiBase.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<ILoginResponse, ILoginCredentials>({
      query: (credentials) => ({
        url: '/auth/login',
        method: 'POST',
        body: credentials,
      }),
      invalidatesTags: [ApiTags.Auth],
    }),
  }),
});

export const { useLoginMutation } = authApi;
