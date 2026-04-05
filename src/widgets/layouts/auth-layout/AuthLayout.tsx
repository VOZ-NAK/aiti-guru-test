import type { FC, ReactNode } from 'react';

import styles from './auth-layout.module.scss';

interface IAuthLayoutProps {
  children: ReactNode;
}

const AuthLayout: FC<IAuthLayoutProps> = ({ children }) => {
  return (
    <div className={styles.authLayout}>
      <div className={styles.container}>
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
};

export default AuthLayout;
