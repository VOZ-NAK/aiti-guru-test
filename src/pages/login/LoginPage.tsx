import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { useAuth } from '@/features/auth/lib/useAuth';

import { Checkbox, InputLogin, InputPassword, SubmitButton, Typography } from '@/shared/ui';

import styles from './login-page.module.scss';

interface LoginFormData {
  login: string;
  password: string;
  rememberMe: boolean;
}

const LoginPage = () => {
  const { login, isLoading, error } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    setValue,
    watch,
  } = useForm<LoginFormData>({
    defaultValues: {
      login: '',
      password: '',
      rememberMe: false,
    },
    mode: 'onChange',
  });

  const loginValue = watch('login');
  const passwordValue = watch('password');

  useEffect(() => {
    setValue('login', 'emilys');
    setValue('password', 'emilyspass');
  }, [setValue]);

  const onSubmit = async (data: LoginFormData) => {
    try {
      await login(data);
    } catch {
      setError('root', {
        type: 'manual',
        message: error || 'Ошибка авторизации',
      });
    }
  };

  return (
    <div className={styles.loginPage}>
      <div className={styles.header}>
        <Typography variant="inter-40" as="h1">
          Добро пожаловать!
        </Typography>
        <Typography className={styles.subtitle} variant="inter-18" as="p">
          Пожалуйста, авторизируйтесь
        </Typography>
      </div>

      <form className={styles.form} onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className={styles.formFields}>
          <InputLogin
            {...register('login', { required: 'Введите логин' })}
            placeholder="Логин"
            label="Логин"
            error={errors.login?.message}
            disabled={isLoading}
            value={loginValue}
          />
          <InputPassword
            {...register('password', { required: 'Введите пароль' })}
            placeholder="Пароль"
            label="Пароль"
            error={errors.password?.message}
            disabled={isLoading}
            value={passwordValue}
          />
        </div>

        {(error || errors.root?.message) && (
          <div className={styles.errorMessage}>
            <Typography variant="inter-16" color="error">
              {error || errors.root?.message}
            </Typography>
          </div>
        )}

        <div className={styles.checkboxWrapper}>
          <Checkbox label="Запомнить данные" {...register('rememberMe')} disabled={isLoading} />
        </div>

        <SubmitButton type="submit" disabled={isLoading}>
          {isLoading ? 'Вход...' : 'Войти'}
        </SubmitButton>

        <div className={styles.divider}>
          <span>или</span>
        </div>
      </form>

      <div className={styles.footer}>
        <Typography variant="inter-18">
          Нет аккаунта?{' '}
          <a href="#" className="link">
            Создать
          </a>
        </Typography>
      </div>
    </div>
  );
};

export default LoginPage;
