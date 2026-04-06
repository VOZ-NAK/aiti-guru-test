import { type FC, type ReactNode } from 'react';

import styles from './main-layout.module.scss';

interface IMainLayout {
  children: ReactNode;
}

const MainLayout: FC<IMainLayout> = ({ children }) => {
  return <main className={styles.mainLayout}>{children}</main>;
};
export default MainLayout;
