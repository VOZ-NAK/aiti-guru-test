import type { FC, ReactNode } from 'react';

import styles from './auth-layout.module.scss';

interface IAuthLayout {
  children: ReactNode;
}

const AuthLayout: FC<IAuthLayout> = ({ children }) => {
  return (
    <div className={styles.authLayout}>
      <div className={styles.container}>
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
};

export default AuthLayout;
