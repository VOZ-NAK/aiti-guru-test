import type { FC } from 'react';
import { useState } from 'react';

import type { IProduct } from '@/entities/product/api/productsApi';

import { AddButton, ThreeDotsCircleSVG } from '..';
import { Typography } from '../typography/Typography';
import styles from './products-table.module.scss';

interface IProductsTable {
  products: IProduct[];
  onSort: (field: keyof IProduct) => void;
  sortField: keyof IProduct | null;
  sortOrder: 'asc' | 'desc';
}

const ProductsTable: FC<IProductsTable> = ({ products, onSort, sortField, sortOrder }) => {
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const [isAllSelected, setIsAllSelected] = useState(false);

  const handleSelectAll = () => {
    if (isAllSelected) {
      setSelectedIds([]);
      setIsAllSelected(false);
    } else {
      setSelectedIds(products.map((p) => p.id));
      setIsAllSelected(true);
    }
  };

  const handleSelectOne = (id: number) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter((selectedId) => selectedId !== id));
      setIsAllSelected(false);
    } else {
      setSelectedIds([...selectedIds, id]);
      if (selectedIds.length + 1 === products.length) {
        setIsAllSelected(true);
      }
    }
  };

  const getSortIcon = (field: keyof IProduct) => {
    if (sortField !== field) return '↕️';
    return sortOrder === 'asc' ? '↑' : '↓';
  };

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th className={styles.checkboxCell}>
            <label className={styles.customCheckbox}>
              <input type="checkbox" checked={isAllSelected} onChange={handleSelectAll} />
              <span className={styles.checkmark}></span>
            </label>
          </th>
          <th onClick={() => onSort('title')} className={styles.sortableTitle}>
            <Typography variant="cairo-16">Наименование {getSortIcon('title')}</Typography>
          </th>
          <th onClick={() => onSort('brand')} className={styles.sortable}>
            <Typography variant="cairo-16">Вендор {getSortIcon('brand')}</Typography>
          </th>
          <th className={styles.sortable}>
            <Typography variant="cairo-16">Артикул</Typography>
          </th>
          <th onClick={() => onSort('rating')} className={styles.sortable}>
            <Typography variant="cairo-16">Оценка {getSortIcon('rating')}</Typography>
          </th>
          <th onClick={() => onSort('price')} className={styles.sortable}>
            <Typography variant="cairo-16">Цена, ₽ {getSortIcon('price')}</Typography>
          </th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.id} className={styles.row}>
            <td className={styles.checkboxCell}>
              <label className={styles.customCheckbox}>
                <input
                  type="checkbox"
                  checked={selectedIds.includes(product.id)}
                  onChange={() => handleSelectOne(product.id)}
                />
                <span className={styles.checkmark}></span>
              </label>
            </td>
            <td className={styles.productCell}>
              <img
                src={product.thumbnail}
                alt={product.title}
                className={styles.thumbnail}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://placehold.co/48x48';
                }}
              />
              <div className={styles.productInfo}>
                <Typography variant="cairo-16">{product.title}</Typography>
                <Typography variant="cairo-14" className={styles.productCategory}>
                  {product.category}
                </Typography>
              </div>
            </td>
            <td className={styles.productBrand}>
              <Typography variant="opensans-16-bold">{product.brand || '—'}</Typography>
            </td>
            <td className={styles.productSku}>
              <Typography variant="opensans-16">{product.sku}</Typography>
            </td>
            <td className={styles.productRating}>
              <Typography variant="opensans-16">
                <span className={product.rating < 3.5 ? styles.lowRating : ''}>
                  {product.rating}
                </span>
                /5
              </Typography>
            </td>
            <td className={styles.price}>
              <Typography variant="roboto-16">{product.price.toLocaleString('ru-RU')} ₽</Typography>
            </td>
            <td>
              <div className={styles.actions}>
                <AddButton />
                <ThreeDotsCircleSVG color="#B2B3B9" />
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductsTable;
