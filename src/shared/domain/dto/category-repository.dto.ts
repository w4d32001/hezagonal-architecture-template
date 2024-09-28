export interface ICategoryRepositoryDto {
  name: string;
}

export interface IGetCategoryRepositoryDto extends ICategoryRepositoryDto {
  categoryId: number;
}
