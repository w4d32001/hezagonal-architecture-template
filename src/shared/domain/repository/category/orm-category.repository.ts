import { DataSource, Repository } from 'typeorm';
import { CategoryEntity } from '../../entities/category.entity';
import { IOrmCategoryRepository } from './orm-category.repository.interface';
import {
  IGetCategoryRepositoryDto,
  ICategoryRepositoryDto,
} from '../../dto/category-repository.dto';
import { Injectable } from '@nestjs/common';
@Injectable()
export class OrmCategoryRepository
  extends Repository<CategoryEntity>
  implements IOrmCategoryRepository
{
  constructor(dataSource: DataSource) {
    super(CategoryEntity, dataSource.createEntityManager());
  }
  async getAllCategories(): Promise<IGetCategoryRepositoryDto[]> {
    return await this.find();
  }

  async getCategory(categoryId: number): Promise<IGetCategoryRepositoryDto> {
    return await this.findOneBy({ categoryId });
  }
  async saveCategory(newCategory: ICategoryRepositoryDto): Promise<void> {
    await this.save(newCategory);
  }
  async updateCategory(
    categoryId: number,
    updateCategory: IGetCategoryRepositoryDto,
  ): Promise<void> {
    await this.update(categoryId, updateCategory);
  }
  async deleteCategory(id: number): Promise<void> {
    await this.delete(id);
  }
}
