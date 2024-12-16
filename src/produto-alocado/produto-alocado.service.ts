import { Injectable } from '@nestjs/common';
import { CreateProdutoAlocadoDto } from './dto/create-produto-alocado.dto';
import { UpdateProdutoAlocadoDto } from './dto/update-produto-alocado.dto';

@Injectable()
export class ProdutoAlocadoService {
  create(createProdutoAlocadoDto: CreateProdutoAlocadoDto) {
    return 'This action adds a new produtoAlocado';
  }

  findAll() {
    return `This action returns all produtoAlocado`;
  }

  findOne(id: number) {
    return `This action returns a #${id} produtoAlocado`;
  }

  update(id: number, updateProdutoAlocadoDto: UpdateProdutoAlocadoDto) {
    return `This action updates a #${id} produtoAlocado`;
  }

  remove(id: number) {
    return `This action removes a #${id} produtoAlocado`;
  }
}
