import { Inject, Injectable } from '@nestjs/common';
import { ICrudCategoryRepository } from './category.interface';
import { OrmCategoryRepository } from 'src/shared/domain/repository/category/orm-category.repository';
import { IOrmCategoryRepository } from 'src/shared/domain/repository/category/orm-category.repository.interface';
import {
  ICategoryRepositoryModel,
  ISaveCategoryRepositoryModel,
} from '../models/category-repository.model';
@Injectable()
export class CategoryRepository implements ICrudCategoryRepository {
  constructor(
    @Inject(OrmCategoryRepository)
    private readonly ormCategoryRepository: IOrmCategoryRepository,
  ) {}
  async getAllCategories(): Promise<ICategoryRepositoryModel[]> {
    const allCategories = await this.ormCategoryRepository.getAllCategories();
    return allCategories.map((category) => ({
      categoryId: category.categoryId,
      name: category.name,
    }));
  }
  async getCategory(categoryId: number): Promise<ICategoryRepositoryModel> {
    const category = await this.ormCategoryRepository.getCategory(categoryId);
    return category;
  }
  async saveCategory(newCategory: ISaveCategoryRepositoryModel): Promise<void> {
    await this.ormCategoryRepository.saveCategory(newCategory);
  }
  async updateCategory(
    categoryId: number,
    updateCategory: ISaveCategoryRepositoryModel,
  ): Promise<void> {
    await this.ormCategoryRepository.updateCategory(categoryId, updateCategory);
  }
  async deleteCategory(categoryId: number): Promise<void> {
    return await this.ormCategoryRepository.deleteCategory(categoryId);
  }
}
