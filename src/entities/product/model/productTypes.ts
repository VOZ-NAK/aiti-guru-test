export interface IProduct {
  id: number;
  title: string;
  price: number;
  rating: number;
  brand: string;
  sku: string;
  thumbnail: string;
  category: string;
  description?: string;
  stock?: number;
}

export interface IProductsResponse {
  products: IProduct[];
  total: number;
  skip: number;
  limit: number;
}
