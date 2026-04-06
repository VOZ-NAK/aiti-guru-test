import type { FC, ReactNode } from 'react';

import { Typography } from '../typography/Typography';
import styles from './button.module.scss';

interface ButtonProps {
  icon?: ReactNode;
  children?: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

const Button: FC<ButtonProps> = ({ icon, children, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {icon && <span className={styles.icon}>{icon}</span>}
      {children && <Typography variant="cairo-14">{children}</Typography>}
    </button>
  );
};

export default Button;
