import { type FC, type ReactNode } from 'react';

import './auth-layout.module.scss';

interface IAuthLayoutProps {
  children: ReactNode;
}

const AuthLayout: FC<IAuthLayoutProps> = ({ children }) => {
  return (
    <div className="auth-layout">
      <div className="auth-layout__container">{children}</div>
    </div>
  );
};

export default AuthLayout;
