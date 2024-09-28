import { Inject, Injectable } from '@nestjs/common';
import { ICrudProductRepository } from './product.interface';
import { OrmProductRepository } from 'src/shared/domain/repository/product/orm-product.repository';
import { IOrmProductRepository } from 'src/shared/domain/repository/product/orm-product.repository.interface';
import {
  IProductRepositoryModel,
  ISaveProductRepositoryModel,
} from '../models/product-repository.model';

@Injectable()
export class ProductRepository implements ICrudProductRepository {
  constructor(
    @Inject(OrmProductRepository)
    private readonly ormProductRepository: IOrmProductRepository,
  ) {}
  async getAllProducts(): Promise<IProductRepositoryModel[]> {
    const allProducts = await this.ormProductRepository.getAllProducts();
    return allProducts.map((product) => ({
      productId: product.productId,
      description: product.description,
      price: product.price,
    }));
  }
  async saveProducts(newProduct: ISaveProductRepositoryModel): Promise<void> {
    await this.ormProductRepository.saveProduct(newProduct);
  }
}
