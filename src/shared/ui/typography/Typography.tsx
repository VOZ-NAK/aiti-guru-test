import cn from 'classnames';

import { variantStyles } from './types';
import type { TypographyProps } from './types';

export const Typography = ({
  variant = 'opensans-16',
  as: Component = 'p',
  children,
  className,
  ...props
}: TypographyProps) => {
  return (
    <Component className={cn(variantStyles[variant], className)} {...props}>
      {children}
    </Component>
  );
};
