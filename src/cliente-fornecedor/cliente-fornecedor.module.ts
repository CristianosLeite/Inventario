import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClienteFornecedor } from './cliente-fornecedor.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ClienteFornecedor])],
})
export class ProdutoAlocadoModule {}
