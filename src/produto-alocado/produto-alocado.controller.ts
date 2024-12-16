import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProdutoAlocadoService } from './produto-alocado.service';
import { CreateProdutoAlocadoDto } from './dto/create-produto-alocado.dto';
import { UpdateProdutoAlocadoDto } from './dto/update-produto-alocado.dto';

@Controller('produto-alocado')
export class ProdutoAlocadoController {
  constructor(private readonly produtoAlocadoService: ProdutoAlocadoService) {}

  @Post()
  create(@Body() createProdutoAlocadoDto: CreateProdutoAlocadoDto) {
    return this.produtoAlocadoService.create(createProdutoAlocadoDto);
  }

  @Get()
  findAll() {
    return this.produtoAlocadoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.produtoAlocadoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProdutoAlocadoDto: UpdateProdutoAlocadoDto) {
    return this.produtoAlocadoService.update(+id, updateProdutoAlocadoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.produtoAlocadoService.remove(+id);
  }
}
