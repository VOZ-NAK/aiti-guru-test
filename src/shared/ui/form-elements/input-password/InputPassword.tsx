import classNames from 'classnames';

import { forwardRef, useState } from 'react';

import { EyeOffSVG, EyeSVG, LockSVG } from '@/shared/ui/icons';

import { Typography } from '../../typography/Typography';
import styles from './input-password.module.scss';

interface IInputPassword extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  error?: string;
  label?: string;
}

const InputPassword = forwardRef<HTMLInputElement, IInputPassword>(
  (
    {
      placeholder = 'Пароль',
      error,
      label = 'Пароль',
      className,
      disabled,
      value,
      onChange,
      ...props
    },
    ref
  ) => {
    const [isVisible, setIsVisible] = useState(false);
    const iconColor = error ? 'var(--color-error)' : 'var(--color-gray-275)';

    const toggleVisibility = () => {
      setIsVisible(!isVisible);
    };

    return (
      <div className={styles.wrapper}>
        {label && (
          <Typography
            variant="inter-18"
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
            ref={ref}
            type={isVisible ? 'text' : 'password'}
            className={classNames(styles.input, className)}
            placeholder={placeholder}
            disabled={disabled}
            value={value || ''}
            onChange={onChange}
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
          <Typography variant="inter-18" color="error" className={styles.errorMessage}>
            {error}
          </Typography>
        )}
      </div>
    );
  }
);

InputPassword.displayName = 'InputPassword';

export default InputPassword;
