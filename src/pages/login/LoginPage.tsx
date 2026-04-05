import { InputLogin, InputPassword } from '@/shared/ui';

const LoginPage = () => {
  return (
    <div className="login-page">
      <h1>Авторизация</h1>
      <p>Здесь будет форма входа</p>
      <InputLogin />
      <InputPassword label="Пароль" error="wqeqwe" />
    </div>
  );
};
export default LoginPage;
