import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ProductEntity } from './product.entity';

@Entity({ name: 'category' })
export class CategoryEntity {
  @PrimaryGeneratedColumn('increment')
  categoryId: number;

  @Column()
  name: string;

  @OneToMany(() => ProductEntity, (product) => product.category)
  products: ProductEntity[];
}
