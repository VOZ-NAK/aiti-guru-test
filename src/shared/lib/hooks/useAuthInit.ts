import { useEffect } from 'react';

import { setToken, setUser } from '@/entities/user';

import { tokenService } from '@/shared/lib/tokenService';

import { useAppDispatch } from './redux';

export const useAuthInit = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const token = tokenService.getToken();

    if (token) {
      dispatch(setToken(token));

      const savedUser = localStorage.getItem('user');
      if (savedUser) {
        try {
          const user = JSON.parse(savedUser);
          dispatch(setUser(user));
        } catch (error) {
          console.error('Failed to restore user:', error);
        }
      }
    }
  }, [dispatch]);
};
