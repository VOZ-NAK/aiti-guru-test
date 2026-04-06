import type { FC } from 'react';

import { PlusSVG } from '../icons';
import styles from './add-button.module.scss';

const AddButton: FC = () => {
  return (
    <button type="button" className={styles.button}>
      <PlusSVG />
    </button>
  );
};

export default AddButton;
