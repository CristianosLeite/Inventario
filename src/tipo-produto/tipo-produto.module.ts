import { Module } from '@nestjs/common';
import { TipoProdutoService } from './tipo-produto.service';
import { TipoProdutoController } from './tipo-produto.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipoProduto } from './entities/tipo-produto.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TipoProduto])],
  controllers: [TipoProdutoController],
  providers: [TipoProdutoService],
})
export class TipoProdutoModule {}
