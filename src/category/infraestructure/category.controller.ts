import { Controller, Inject } from '@nestjs/common';
import { ProductUseCaseService } from 'src/products/application/product-use-case.service';
import { IUseCaseCategoryservice } from '../application/category-use-case.interface';
import { CategoryDto } from './dto/category.dto';

@Controller()
export class CategoryController {
  constructor(
    @Inject(ProductUseCaseService)
    private readonly _categoryService: IUseCaseCategoryservice,
  ) {}
  getCategories(): Promise<CategoryDto[]> {
    return this._categoryService.getAllCategories();
  }
}
