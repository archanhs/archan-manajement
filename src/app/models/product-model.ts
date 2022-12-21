export class ProductModel {
  id: number = 0;
  title: string = '';
  description: string = '';
  price: number = 0;
  discountPercentage: number = 0;
  stock: number = 0;
  rating?: number;
  brand?: string;
  categry?: string;
  thumbnail?: string;
  images?: Array<string>;
}
