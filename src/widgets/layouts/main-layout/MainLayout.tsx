import { type FC, type ReactNode } from 'react';

import './main-layout.module.scss';

interface IMainLayoutProps {
  children: ReactNode;
}

const MainLayout: FC<IMainLayoutProps> = ({ children }) => {
  return (
    <div className="main-layout">
      <header className="main-layout__header">
        <h1>Админ панель</h1>
      </header>
      <main className="main-layout__content">{children}</main>
    </div>
  );
};
export default MainLayout;
