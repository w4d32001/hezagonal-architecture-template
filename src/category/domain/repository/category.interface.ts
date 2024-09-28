import {
  ICategoryRepositoryModel,
  ISaveCategoryRepositoryModel,
} from '../models/category-repository.model';

export interface ICrudCategoryRepository {
  getAllCategories(): Promise<ICategoryRepositoryModel[]>;
  getCategory(categoryId: number): Promise<ICategoryRepositoryModel>;
  saveCategory(newCategory: ISaveCategoryRepositoryModel): Promise<void>;
  updateCategory(
    categoryId: number,
    updateCategory: ISaveCategoryRepositoryModel,
  ): Promise<void>;
  deleteCategory(categoryId: number): Promise<void>;
}
