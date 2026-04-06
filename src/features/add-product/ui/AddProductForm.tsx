import toast from 'react-hot-toast';

import { useState } from 'react';

import { Button, Input } from '@/shared/ui';

import styles from './add-product-form.module.scss';

interface AddProductFormProps {
  onSuccess: () => void;
  onCancel: () => void;
}

interface FormData {
  title: string;
  price: string;
  brand: string;
  sku: string;
}

export const AddProductForm = ({ onSuccess, onCancel }: AddProductFormProps) => {
  const [formData, setFormData] = useState<FormData>({
    title: '',
    price: '',
    brand: '',
    sku: '',
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.title.trim()) {
      newErrors.title = 'Введите наименование';
    }
    if (!formData.price) {
      newErrors.price = 'Введите цену';
    } else if (Number(formData.price) <= 0) {
      newErrors.price = 'Цена должна быть больше 0';
    }
    if (!formData.brand.trim()) {
      newErrors.brand = 'Введите вендора';
    }
    if (!formData.sku.trim()) {
      newErrors.sku = 'Введите артикул';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    const newProduct = {
      id: Date.now(),
      title: formData.title,
      price: Number(formData.price),
      brand: formData.brand,
      sku: formData.sku,
      rating: 0,
      thumbnail: 'https://placehold.co/48x48',
      category: 'Новый товар',
    };

    const existingProducts = JSON.parse(localStorage.getItem('products') || '[]');
    localStorage.setItem('products', JSON.stringify([newProduct, ...existingProducts]));

    toast.success('Товар успешно добавлен!');
    onSuccess();
  };

  const handleChange = (field: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [field]: e.target.value });
    if (errors[field]) {
      setErrors({ ...errors, [field]: undefined });
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <Input
        label="Наименование"
        placeholder="Введите наименование товара"
        value={formData.title}
        onChange={handleChange('title')}
        error={errors.title}
        required
      />

      <Input
        label="Цена"
        type="number"
        placeholder="Введите цену"
        value={formData.price}
        onChange={handleChange('price')}
        error={errors.price}
        required
      />

      <Input
        label="Вендор"
        placeholder="Введите название вендора"
        value={formData.brand}
        onChange={handleChange('brand')}
        error={errors.brand}
        required
      />

      <Input
        label="Артикул"
        placeholder="Введите артикул"
        value={formData.sku}
        onChange={handleChange('sku')}
        error={errors.sku}
        required
      />

      <div className={styles.buttons}>
        <Button onClick={onCancel}>Отмена</Button>
        <Button>Добавить товар</Button>
      </div>
    </form>
  );
};
