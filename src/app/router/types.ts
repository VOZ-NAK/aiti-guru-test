export type RouteAccessType = 'public' | 'guest' | 'auth';
export type AppLayoutType = 'main' | 'auth' | 'none';

export interface IRoute {
  path: string;
  element: React.ComponentType;
  access: RouteAccessType;
  layout: AppLayoutType;
}

export const RouteAccess = {
  PUBLIC: 'public' as const,
  GUEST_ONLY: 'guest' as const,
  AUTH_ONLY: 'auth' as const,
} as const;

export const AppLayout = {
  MAIN: 'main' as const,
  AUTH: 'auth' as const,
  NONE: 'none' as const,
} as const;
