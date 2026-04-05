import cn from 'classnames';

import { alignStyles, colorStyles, type TypographyProps, variantStyles } from './types';

export const Typography = ({
  variant = 'body',
  color = 'gray-900',
  align = 'left',
  as: Component = 'p',
  children,
  className,
  ...props
}: TypographyProps) => {
  return (
    <Component
      className={cn(variantStyles[variant], colorStyles[color], alignStyles[align], className)}
      {...props}
    >
      {children}
    </Component>
  );
};
