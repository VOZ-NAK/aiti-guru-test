import { SearchHeader } from '@/widgets';
import toast from 'react-hot-toast';

import { useState } from 'react';

import { AddProductForm } from '@/features/add-product/ui/AddProductForm';

import type { IProduct } from '@/entities/product/api/productsApi';
import { useProducts } from '@/entities/product/hooks/useProducts';

import { Button, Modal, Pagination, PlusCircleSVG, RefreshSVG, Typography } from '@/shared/ui';
import ProductsTable from '@/shared/ui/products-table/ProductsTable';

import styles from './products-page.module.scss';

const ProductsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortField, setSortField] = useState<keyof IProduct | null>(null);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { products, total, isLoading, refetch } = useProducts({
    page: currentPage,
    limit: 20,
    searchQuery,
    sortField,
    sortOrder,
  });

  const handleAddProductSuccess = () => {
    setIsModalOpen(false);
    refetch();
  };

  const handleSort = (field: keyof IProduct) => {
    if (sortField === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortOrder('asc');
    }
  };

  const handleRefresh = () => {
    refetch();
    toast.success('Данные обновлены');
  };

  const startIndex = (currentPage - 1) * 20 + 1;
  const endIndex = Math.min(currentPage * 20, total);

  return (
    <div className={styles.productsPage}>
      <SearchHeader onSearch={setSearchQuery} />
      <div className={styles.content}>
        <div className={styles.header}>
          <Typography variant="cairo-20" className={styles.title}>
            Все позиции
          </Typography>
          <div className={styles.actions}>
            <button className={styles.refreshButton} onClick={handleRefresh}>
              <RefreshSVG />
            </button>
            <Button icon={<PlusCircleSVG />} onClick={() => setIsModalOpen(true)}>
              Добавить
            </Button>
          </div>
        </div>

        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Добавление товара">
          <AddProductForm
            onSuccess={handleAddProductSuccess}
            onCancel={() => setIsModalOpen(false)}
          />
        </Modal>

        {isLoading ? (
          <div className={styles.loader}>
            <Typography variant="inter-16">Загрузка товаров...</Typography>
          </div>
        ) : (
          <>
            <div className={styles.tableWrapper}>
              <ProductsTable
                products={products}
                onSort={handleSort}
                sortField={sortField}
                sortOrder={sortOrder}
              />
            </div>
            <div className={styles.footer}>
              <Typography variant="roboto-18-regular" className={styles.paginationInfo}>
                Показано{' '}
                <span>
                  {startIndex}-{endIndex}
                </span>{' '}
                из <span>{total}</span>
              </Typography>
              <Pagination
                currentPage={currentPage}
                totalPages={Math.ceil(total / 20)}
                onPageChange={setCurrentPage}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;
