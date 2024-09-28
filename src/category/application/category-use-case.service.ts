import { Inject, Injectable } from '@nestjs/common';
import { IUseCaseCategoryservice } from './category-use-case.interface';
import { CategoryRepository } from '../domain/repository/category.repository';
import { IResponse } from 'src/products/application/product-user-case.iterface';
import { CategoryDto } from '../infraestructure/dto/category.dto';
@Injectable()
export class CategoryUseCaseService implements IUseCaseCategoryservice {
  constructor(
    @Inject(CategoryRepository)
    private readonly categoryRepository: CategoryRepository,
  ) {}
  async getAllCategories(): Promise<CategoryDto[]> {
    const categories = await this.categoryRepository.getAllCategories();
    return categories.map((category) => category);
  }
  async getCategory(categoryId: number): Promise<CategoryDto> {
    const category = await this.categoryRepository.getCategory(categoryId);
    return category;
  }
  async saveCategory(newCategory: CategoryDto): Promise<IResponse> {
    await this.categoryRepository.saveCategory(newCategory);
    return { message: 'success', code: 200 };
  }
  async updateCategory(
    categoryId: number,
    updateCategory: CategoryDto,
  ): Promise<IResponse> {
    await this.categoryRepository.updateCategory(categoryId, updateCategory);
    return { message: 'success', code: 201 };
  }
  async deleteCategory(categoryId: number): Promise<IResponse> {
    await this.categoryRepository.deleteCategory(categoryId);
    return { message: 'success', code: 201 };
  }
}
