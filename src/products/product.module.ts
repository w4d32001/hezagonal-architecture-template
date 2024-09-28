import { Module } from '@nestjs/common';
import { ProductController } from './infraestructure/product.controller';
import { ProductUseCaseService } from './application/product-use-case.service';
import { ProductRepository } from './domain/repository/product.repository';
import { OrmProductRepository } from 'src/shared/domain/repository/product/orm-product.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductEntity } from 'src/shared/domain/entities';

@Module({
  controllers: [ProductController],
  providers: [ProductUseCaseService, ProductRepository, OrmProductRepository],
  imports: [TypeOrmModule.forFeature([ProductEntity])],
})
export class ProductModule {}
