import cn from 'classnames';

import { type ComponentProps, forwardRef, useId } from 'react';

import { Typography } from '../../typography/Typography';
import styles from './checkbox.module.scss';

interface ICheckbox extends ComponentProps<'input'> {
  label?: string;
  error?: string;
}

const Checkbox = forwardRef<HTMLInputElement, ICheckbox>(
  ({ label, error, className, id, ...props }, ref) => {
    const generatedId = useId();
    const checkboxId = id || generatedId;

    return (
      <div className={cn(styles.wrapper, className)}>
        <div className={cn(styles.checkbox, { [styles.checkboxError]: error })}>
          <input
            id={checkboxId}
            type="checkbox"
            ref={ref}
            className={styles.hiddenInput}
            {...props}
          />
          <label htmlFor={checkboxId} className={styles.checkmark}>
            <svg viewBox="0 0 50 50">
              <path d="M5 30 L 20 45 L 45 5" />
            </svg>
          </label>
          {label && (
            <label htmlFor={checkboxId} className={styles.label}>
              {label}
            </label>
          )}
        </div>
        {error && (
          <Typography variant="inter-16" className={styles.error}>
            {error}
          </Typography>
        )}
      </div>
    );
  }
);

Checkbox.displayName = 'Checkbox';

export default Checkbox;
