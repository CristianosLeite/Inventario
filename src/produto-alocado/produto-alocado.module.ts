import { Module } from '@nestjs/common';
import { ProdutoAlocadoService } from './produto-alocado.service';
import { ProdutoAlocadoController } from './produto-alocado.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProdutoAlocado } from './entities/produto-alocado.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProdutoAlocado])],
  controllers: [ProdutoAlocadoController],
  providers: [ProdutoAlocadoService],
})
export class ProdutoAlocadoModule {}
