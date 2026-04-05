// src/shared/lib/hooks/useAuthInit.ts
import { useEffect } from 'react';

import { setToken } from '@/entities/user';

import { tokenService } from '@/shared/lib/tokenService';

import { useAppDispatch } from './redux';

export const useAuthInit = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const token = tokenService.getToken();
    if (token) {
      dispatch(setToken(token));
    }
  }, [dispatch]);
};
