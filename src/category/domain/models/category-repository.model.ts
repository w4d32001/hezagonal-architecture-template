export interface ICategoryRepositoryModel {
  categoryId: number;
  name: string;
}

export type ISaveCategoryRepositoryModel = Omit<
  ICategoryRepositoryModel,
  'categoryId'
>;
