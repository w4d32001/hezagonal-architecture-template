import { ProductDto } from '../infraestructure/dto/product.dto';

export interface IUseCaseProductService {
  getAllProducts(): Promise<ProductDto[]>;
  saveProducts(newProduct: ProductDto): Promise<IResponse>;
}

export interface IResponse {
  message: string;
  code: number;
}
