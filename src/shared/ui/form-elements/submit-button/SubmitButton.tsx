import classNames from 'classnames';

import type { ButtonHTMLAttributes, FC } from 'react';

import { Typography } from '../../typography/Typography';
import styles from './submit-button.module.scss';

interface ISubmitButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  fullWidth?: boolean;
}

const SubmitButton: FC<ISubmitButton> = ({
  children = 'Войти',
  isLoading,
  fullWidth = true,
  disabled,
  className,
  ...props
}) => {
  return (
    <button
      type="submit"
      className={classNames(
        styles.button,
        {
          [styles.fullWidth]: fullWidth,
          [styles.loading]: isLoading,
        },
        className
      )}
      disabled={disabled || isLoading}
      {...props}
    >
      <Typography variant="inter-18" className={styles.text}>
        {isLoading ? 'Загрузка...' : children}
      </Typography>
    </button>
  );
};

export default SubmitButton;
