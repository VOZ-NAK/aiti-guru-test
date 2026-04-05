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

      const token = response.accessToken || response.token;

      if (!token) {
        console.error('Token not found in response!');
        throw new Error('Token not received');
      }

      tokenService.setToken(token, data.rememberMe);

      const userData = {
        id: response.id,
        username: response.username,
        email: response.email,
        firstName: response.firstName,
        lastName: response.lastName,
        gender: response.gender,
        image: response.image,
      };

      if (data.rememberMe) {
        localStorage.setItem('user', JSON.stringify(userData));
      } else {
        sessionStorage.setItem('user', JSON.stringify(userData));
      }

      dispatch(setToken(token));
      dispatch(setUser(userData));

      navigate('/products', { replace: true });
    } catch (err) {
      console.error('Login error:', err);
      throw err;
    }
  };

  const logout = () => {
    tokenService.clearToken();
    localStorage.removeItem('user');
    sessionStorage.removeItem('user');
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

    return 'Неверный логин или пароль';
  };

  const error = mutationError ? getErrorMessage(mutationError) : null;

  return {
    login,
    logout,
    isLoading,
    error,
  };
};
