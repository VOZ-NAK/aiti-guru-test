import classNames from 'classnames';

import type { FC, InputHTMLAttributes } from 'react';

import { CloseSVG, UserSVG } from '@/shared/ui/icons';

import { Typography } from '../../typography/Typography';
import styles from './input-login.module.scss';

interface IInputLogin extends InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  error?: string;
  label?: string;
  value?: string;
}

const InputLogin: FC<IInputLogin> = ({
  placeholder = 'Логин',
  error,
  label = 'Логин',
  className,
  disabled,
  value: externalValue,
  onChange,
  ...props
}) => {
  const iconColor = error ? 'var(--color-error)' : 'var(--color-gray-275)';
  const showClearButton = externalValue && !disabled;

  const handleClear = () => {
    if (onChange) {
      const event = {
        target: { value: '', name: props.name },
      } as React.ChangeEvent<HTMLInputElement>;
      onChange(event);
    }
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
          [styles.disabled]: disabled,
        })}
      >
        <UserSVG color={iconColor} className={styles.leftIcon} />

        <input
          type="text"
          className={classNames(styles.input, className)}
          placeholder={placeholder}
          disabled={disabled}
          value={externalValue || ''}
          onChange={onChange}
          {...props}
        />

        {showClearButton && (
          <button type="button" className={styles.clearButton} onClick={handleClear}>
            <CloseSVG color={iconColor} />
          </button>
        )}
      </div>

      {error && (
        <Typography variant="inter-16" className={styles.errorMessage}>
          {error}
        </Typography>
      )}
    </div>
  );
};

export default InputLogin;
