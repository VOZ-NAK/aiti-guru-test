import classNames from 'classnames';

import type { FC, InputHTMLAttributes } from 'react';
import { useState } from 'react';

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
  const [internalValue, setInternalValue] = useState('');

  const currentValue = externalValue !== undefined ? externalValue : internalValue;
  const iconColor = error ? 'var(--color-error)' : 'var(--color-gray-600)';
  const showClearButton = currentValue && !disabled; // всегда показываем если есть текст

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e);
    } else {
      setInternalValue(e.target.value);
    }
  };

  const handleClear = () => {
    const newValue = '';

    if (onChange) {
      const event = {
        target: { value: newValue, name: props.name },
      } as React.ChangeEvent<HTMLInputElement>;
      onChange(event);
    } else {
      setInternalValue(newValue);
    }
  };

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
          [styles.disabled]: disabled,
        })}
      >
        <UserSVG color={iconColor} className={styles.leftIcon} />

        <input
          type="text"
          className={classNames(styles.input, className)}
          placeholder={placeholder}
          disabled={disabled}
          value={currentValue}
          onChange={handleChange}
          {...props}
        />

        {showClearButton && (
          <button type="button" className={styles.clearButton} onClick={handleClear}>
            <CloseSVG color={iconColor} />
          </button>
        )}
      </div>

      {error && (
        <Typography variant="body-small" className={styles.errorMessage}>
          {error}
        </Typography>
      )}
    </div>
  );
};

export default InputLogin;
