import { AuthLayout, MainLayout } from '@/widgets';

import { Navigate, Route, Routes } from 'react-router-dom';

import { selectUser } from '@/entities/user';

import { useAppSelector } from '@/shared/lib/hooks/redux';
import { tokenService } from '@/shared/lib/tokenService';

import { routes } from './routes';
import { AppLayout, type IRoute, RouteAccess } from './types';

const Navigation = () => {
  const user = useAppSelector(selectUser);
  const isAuthenticated = !!user || tokenService.isAuthenticated();

  const renderRouteElement = (route: IRoute) => {
    let element: React.ReactNode = <route.element />;

    switch (route.access) {
      case RouteAccess.GUEST_ONLY:
        if (isAuthenticated) {
          element = <Navigate to="/products" replace />;
        }
        break;
      case RouteAccess.AUTH_ONLY:
        if (!isAuthenticated) {
          element = <Navigate to="/login" replace />;
        }
        break;
      case RouteAccess.PUBLIC:
      default:
        break;
    }

    switch (route.layout) {
      case AppLayout.MAIN:
        return <MainLayout>{element}</MainLayout>;
      case AppLayout.AUTH:
        return <AuthLayout>{element}</AuthLayout>;
      case AppLayout.NONE:
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
