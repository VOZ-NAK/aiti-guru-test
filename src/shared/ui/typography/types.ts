import type { ComponentProps, ElementType } from 'react';

export type TVariant =
  | 'inter-40'
  | 'inter-18'
  | 'inter-16'
  | 'cairo-24'
  | 'cairo-20'
  | 'cairo-16'
  | 'cairo-14'
  | 'opensans-16'
  | 'opensans-14'
  | 'opensans-16-bold'
  | 'roboto-16'
  | 'roboto-18-regular';

export interface TypographyProps extends ComponentProps<'p'> {
  variant?: TVariant;
  as?: ElementType;
  children: React.ReactNode;
}

export const variantStyles: Record<TVariant, string> = {
  'inter-40': 'text-inter-40',
  'inter-18': 'text-inter-18',
  'inter-16': 'text-inter-16',
  'cairo-24': 'text-cairo-24',
  'cairo-20': 'text-cairo-20',
  'cairo-16': 'text-cairo-16',
  'cairo-14': 'text-cairo-14',
  'opensans-16': 'text-opensans-16',
  'opensans-14': 'text-opensans-14',
  'opensans-16-bold': 'text-opensans-16-bold',
  'roboto-16': 'text-roboto-16',
  'roboto-18-regular': 'text-roboto-18-regular',
};
