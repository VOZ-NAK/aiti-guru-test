import type { FC } from 'react';

import { InputSearch, Typography } from '@/shared/ui';

import styles from './search-header.module.scss';

interface ISearchHeader {
  onSearch?: (query: string) => void;
}

const SearchHeader: FC<ISearchHeader> = ({ onSearch }) => {
  const handleSearch = (query: string) => {
    onSearch?.(query);
  };

  return (
    <section className={styles.searchHeader}>
      <Typography className={styles.searchTitle} variant="cairo-24">
        Товары
      </Typography>
      <InputSearch onSearch={handleSearch} />
    </section>
  );
};

export default SearchHeader;
