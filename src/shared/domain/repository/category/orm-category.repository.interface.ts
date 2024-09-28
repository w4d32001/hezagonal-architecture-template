import {
  ICategoryRepositoryDto,
  IGetCategoryRepositoryDto,
} from '../../dto/category-repository.dto';

export interface IOrmCategoryRepository {
  getAllCategories(): Promise<IGetCategoryRepositoryDto[]>;
  getCategory(categoryId: number): Promise<IGetCategoryRepositoryDto>;
  saveCategory(newCategory: ICategoryRepositoryDto): Promise<void>;
  updateCategory(
    categoryId: number,
    updateCategory: ICategoryRepositoryDto,
  ): Promise<void>;
  deleteCategory(categoryId: number): Promise<void>;
}
