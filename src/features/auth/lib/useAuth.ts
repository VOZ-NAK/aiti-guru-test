import { useNavigate } from 'react-router-dom';

import { clearUser, setToken, setUser } from '@/entities/user';

import { useAppDispatch } from '@/shared/lib/hooks/redux';
import { tokenService } from '@/shared/lib/tokenService';

import { useLoginMutation } from '../api/authApi';
import type { ILoginFormData } from '../model/authTypes';

export const useAuth = () => {
  const [loginMutation, { isLoading, error: mutationError }] = useLoginMutation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const login = async (data: ILoginFormData) => {
    try {
      const response = await loginMutation({
        username: data.login,
        password: data.password,
      }).unwrap();

      tokenService.setToken(response.token, data.rememberMe);

      dispatch(setToken(response.token));
      dispatch(
        setUser({
          id: response.id,
          username: response.username,
          email: response.email,
          firstName: response.firstName,
          lastName: response.lastName,
          gender: response.gender,
          image: response.image,
        })
      );

      navigate('/products', { replace: true });
    } catch (err) {
      console.error('Login error:', err);
    }
  };

  const logout = () => {
    tokenService.clearToken();
    dispatch(clearUser());
    navigate('/login', { replace: true });
  };

  const getErrorMessage = (error: unknown): string => {
    if (error && typeof error === 'object' && 'data' in error) {
      const data = error.data as { message?: string };
      if (data.message) return data.message;
    }

    if (error && typeof error === 'object' && 'error' in error) {
      const err = error as { error?: string };
      if (err.error) return err.error;
    }

    return 'Ошибка авторизации. Проверьте логин и пароль.';
  };

  const error = mutationError ? getErrorMessage(mutationError) : null;

  return {
    login,
    logout,
    isLoading,
    error,
  };
};
