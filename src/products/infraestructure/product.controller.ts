import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { ProductUseCaseService } from '../application/product-use-case.service';
import {
  IResponse,
  IUseCaseProductService,
} from '../application/product-user-case.iterface';
import { ProductDto } from './dto/product.dto';

@Controller('product')
export class ProductController {
  constructor(
    @Inject(ProductUseCaseService)
    private readonly _productService: IUseCaseProductService,
  ) {}
  @Get()
  getProducts(): Promise<ProductDto[]> {
    return this._productService.getAllProducts();
  }

  @Post()
  saveProduct(@Body() product: ProductDto): Promise<IResponse> {
    return this._productService.saveProducts(product);
  }
}
