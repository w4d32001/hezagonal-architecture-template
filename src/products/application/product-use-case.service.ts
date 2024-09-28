import { Inject, Injectable } from '@nestjs/common';
import { ProductRepository } from '../domain/repository/product.repository';
import {
  IResponse,
  IUseCaseProductService,
} from './product-user-case.iterface';
import { ProductDto } from '../infraestructure/dto/product.dto';

@Injectable()
export class ProductUseCaseService implements IUseCaseProductService {
  constructor(
    @Inject(ProductRepository)
    private readonly productRepository: ProductRepository,
  ) {}
  async getAllProducts(): Promise<ProductDto[]> {
    const products = await this.productRepository.getAllProducts();
    return products.map((product) => product);
  }
  async saveProducts(newProduct: ProductDto): Promise<IResponse> {
    await this.productRepository.saveProducts(newProduct);
    return { message: 'Success', code: 200 };
  }
}
