import { IResponse } from 'src/products/application/product-user-case.iterface';
import { CategoryDto } from '../infraestructure/dto/category.dto';

export interface IUseCaseCategoryservice {
  getAllCategories(): Promise<CategoryDto[]>;
  getCategory(categoryId: number): Promise<CategoryDto>;
  saveCategory(newCategory: CategoryDto): Promise<IResponse>;
  updateCategory(
    categoryId: number,
    updateCategory: CategoryDto,
  ): Promise<IResponse>;
  deleteCategory(categoryId: number): Promise<IResponse>;
}
