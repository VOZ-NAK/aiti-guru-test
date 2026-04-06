import classNames from 'classnames';

import { forwardRef } from 'react';

import styles from './input.module.scss';

interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, IInput>(
  ({ label, error, className, required, ...props }, ref) => {
    return (
      <div className={styles.wrapper}>
        {label && (
          <label className={classNames(styles.label, { [styles.error]: error })}>
            {label}
            {required && <span className={styles.required}>*</span>}
          </label>
        )}

        <div className={classNames(styles.inputWrapper, { [styles.error]: error })}>
          <input ref={ref} className={classNames(styles.input, className)} {...props} />
        </div>

        {error && <span className={styles.errorMessage}>{error}</span>}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
