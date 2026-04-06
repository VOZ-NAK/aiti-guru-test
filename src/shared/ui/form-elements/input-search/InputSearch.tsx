import type { FC } from 'react';
import { useState } from 'react';

import { SearchSVG } from '../../icons';
import styles from './input-search.module.scss';

interface IInputSearch {
  placeholder?: string;
  onSearch?: (query: string) => void;
  debounceDelay?: number;
}

const InputSearch: FC<IInputSearch> = ({
  placeholder = 'Найти',
  onSearch,
  debounceDelay = 500,
}) => {
  const [value, setValue] = useState('');
  const [timeoutId, setTimeoutId] = useState<ReturnType<typeof setTimeout> | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);

    if (timeoutId) clearTimeout(timeoutId);
    const newTimeoutId = setTimeout(() => {
      onSearch?.(newValue);
    }, debounceDelay);
    setTimeoutId(newTimeoutId);
  };

  return (
    <div className={styles.inputSearch}>
      <input placeholder={placeholder} value={value} onChange={handleChange} />
      <SearchSVG className={styles.iconSearch} />
    </div>
  );
};

export default InputSearch;
