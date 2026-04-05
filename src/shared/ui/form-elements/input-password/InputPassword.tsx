import classNames from 'classnames';

import type { FC, InputHTMLAttributes } from 'react';
import { useState } from 'react';

import { EyeOffSVG, EyeSVG, LockSVG } from '@/shared/ui/icons';

import { Typography } from '../../typography/Typography';
import styles from './input-password.module.scss';

interface IInputPassword extends InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  error?: string;
  label?: string;
}

const InputPassword: FC<IInputPassword> = ({
  placeholder = 'Пароль',
  error,
  label,
  className,
  disabled,
  ...props
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const iconColor = error ? 'var(--color-error)' : 'var(--color-gray-150)';

  return (
    <div className={styles.wrapper}>
      {label && (
        <Typography
          variant="body-medium"
          className={classNames(styles.label, {
            [styles.error]: error,
          })}
        >
          {label}
        </Typography>
      )}

      <div
        className={classNames(styles.inputWrapper, {
          [styles.error]: error,
        })}
      >
        <LockSVG size={20} color={iconColor} className={styles.lockIcon} />

        <input
          type={isVisible ? 'text' : 'password'}
          className={classNames(styles.input, className)}
          placeholder={placeholder}
          disabled={disabled}
          {...props}
        />

        <button
          type="button"
          className={styles.button}
          onClick={toggleVisibility}
          tabIndex={-1}
          disabled={disabled}
        >
          {isVisible ? (
            <EyeSVG size={20} color={iconColor} />
          ) : (
            <EyeOffSVG size={20} color={iconColor} />
          )}
        </button>
      </div>

      {error && (
        <Typography variant="body-small" color="error" className={styles.errorMessage}>
          {error}
        </Typography>
      )}
    </div>
  );
};

export default InputPassword;
