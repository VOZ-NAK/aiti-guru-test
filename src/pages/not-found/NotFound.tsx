import { Typography } from '@/shared/ui';

import styles from './not-found.module.scss';

const NotFound = () => {
  return (
    <div className={styles.notFound}>
      <Typography variant="cairo-24">404</Typography>
      <Typography variant="cairo-20">Страница не найдена</Typography>
      <Typography variant="opensans-16">
        Запрашиваемая страница не существует или была перемещена
      </Typography>
    </div>
  );
};

export default NotFound;
