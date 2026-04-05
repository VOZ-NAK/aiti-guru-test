import type { ComponentProps, ElementType } from 'react';

export type TVariant =
  | 'display' // Inter SemiBold 40px
  | 'title-large' // Cairo Bold 24px
  | 'title-medium' // Cairo Bold 20px
  | 'title-small' // Cairo Bold 16px
  | 'subtitle' // Cairo SemiBold 14px
  | 'body' // Open Sans Regular 16px
  | 'body-small' // Open Sans Regular 14px
  | 'body-medium' // Inter Medium 18px
  | 'body-large' // Inter Medium 16px
  | 'caption' // Roboto Mono Regular 16px
  | 'button'; // Open Sans Bold 16px

export type TColor =
  | 'primary'
  | 'secondary'
  | 'error'
  | 'success'
  | 'white'
  | 'gray-300'
  | 'gray-500'
  | 'gray-700'
  | 'gray-900';

export type TAlign = 'left' | 'center' | 'right';

export interface TypographyProps extends ComponentProps<'p'> {
  variant?: TVariant;
  color?: TColor;
  align?: TAlign;
  as?: ElementType;
  children: React.ReactNode;
}

export const variantStyles: Record<TVariant, string> = {
  display: 'text-display',
  'title-large': 'text-title-large',
  'title-medium': 'text-title-medium',
  'title-small': 'text-title-small',
  subtitle: 'text-subtitle',
  body: 'text-body',
  'body-small': 'text-body-small',
  'body-medium': 'text-body-medium',
  'body-large': 'text-body-large',
  caption: 'text-caption',
  button: 'text-button',
};

export const colorStyles: Record<TColor, string> = {
  primary: 'text-primary',
  secondary: 'text-secondary',
  error: 'text-error',
  success: 'text-success',
  white: 'text-white',
  'gray-300': 'text-gray-300',
  'gray-500': 'text-gray-500',
  'gray-700': 'text-gray-700',
  'gray-900': 'text-gray-900',
};

export const alignStyles: Record<TAlign, string> = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
};
