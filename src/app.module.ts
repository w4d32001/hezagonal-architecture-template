import { Module } from '@nestjs/common';
import { CONFIG_DATABASE } from './shared/infraestructure/config-database';
import { ProductModule } from './products/product.module';

@Module({
  imports: [CONFIG_DATABASE(), ProductModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
