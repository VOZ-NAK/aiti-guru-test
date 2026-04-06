import { useMemo } from 'react';

import { useGetProductsQuery, useSearchProductsQuery } from '../api/productsApi';
import type { IProduct } from '../api/productsApi';

interface UseProductsProps {
  page: number;
  limit?: number;
  searchQuery?: string;
  sortField?: keyof IProduct | null;
  sortOrder?: 'asc' | 'desc';
}

export const useProducts = ({
  page,
  limit = 20,
  searchQuery = '',
  sortField,
  sortOrder,
}: UseProductsProps) => {
  const skip = (page - 1) * limit;

  const getAllQuery = useGetProductsQuery({ limit, skip }, { skip: !!searchQuery });
  const searchQueryResult = useSearchProductsQuery(
    { q: searchQuery, limit, skip },
    { skip: !searchQuery }
  );

  const { data, isLoading, error, refetch, isFetching } = searchQuery
    ? searchQueryResult
    : getAllQuery;

  const productsData = data?.products;
  const total = data?.total || 0;

  const sortedProducts = useMemo(() => {
    if (!productsData) return [];

    const result = [...productsData];

    if (sortField && sortOrder) {
      result.sort((a, b) => {
        const aValue = a[sortField];
        const bValue = b[sortField];

        if (typeof aValue === 'number' && typeof bValue === 'number') {
          return sortOrder === 'asc' ? aValue - bValue : bValue - aValue;
        }

        if (typeof aValue === 'string' && typeof bValue === 'string') {
          return sortOrder === 'asc' ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
        }

        return 0;
      });
    }

    return result;
  }, [productsData, sortField, sortOrder]);

  return {
    products: sortedProducts,
    total,
    isLoading: isLoading || isFetching,
    error,
    refetch,
  };
};
