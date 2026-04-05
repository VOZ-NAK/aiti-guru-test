import { AuthLayout, MainLayout } from '@/widgets';

import { Navigate, Route, Routes } from 'react-router-dom';

import { selectUser } from '@/entities/user';

import { useAppSelector } from '@/shared/lib/hooks/redux';

import { routes } from './routes';
import type { IRoute } from './types';

const Navigation = () => {
  const user = useAppSelector(selectUser);
  const isAuthenticated = !!user;

  const renderRouteElement = (route: IRoute) => {
    let element: React.ReactNode = <route.element />;

    switch (route.access) {
      case 'guest':
        if (isAuthenticated) {
          element = <Navigate to="/products" replace />;
        }
        break;
      case 'auth':
        if (!isAuthenticated) {
          element = <Navigate to="/login" replace />;
        }
        break;
      case 'public':
      default:
        break;
    }

    switch (route.layout) {
      case 'main':
        return <MainLayout>{element}</MainLayout>;
      case 'auth':
        return <AuthLayout>{element}</AuthLayout>;
      case 'none':
      default:
        return element;
    }
  };

  return (
    <Routes>
      {routes.map((route) => (
        <Route key={route.path} path={route.path} element={renderRouteElement(route)} />
      ))}
      <Route path="*" element={<Navigate to="/not-found" replace />} />
    </Routes>
  );
};

export default Navigation;
