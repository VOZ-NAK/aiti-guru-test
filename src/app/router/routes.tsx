import { LoginPage, NotFound, ProductsPage } from '@/pages';

import { AppLayout, type IRoute, RouteAccess } from './types';

export const routes: IRoute[] = [
  {
    path: '/login',
    element: LoginPage,
    access: RouteAccess.GUEST_ONLY,
    layout: AppLayout.AUTH,
  },
  {
    path: '/products',
    element: ProductsPage,
    access: RouteAccess.AUTH_ONLY,
    layout: AppLayout.MAIN,
  },
  {
    path: '/',
    element: ProductsPage,
    access: RouteAccess.AUTH_ONLY,
    layout: AppLayout.MAIN,
  },
  {
    path: '/not-found',
    element: NotFound,
    access: RouteAccess.PUBLIC,
    layout: AppLayout.NONE,
  },
];
