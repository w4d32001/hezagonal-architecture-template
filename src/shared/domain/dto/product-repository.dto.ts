export interface IProductRepositoryDto {
  description: string;
  price: number;
  name: string;
  stock: number;
}

export interface IGetProductRepositoryDto extends IProductRepositoryDto {
  productId: number;
}
