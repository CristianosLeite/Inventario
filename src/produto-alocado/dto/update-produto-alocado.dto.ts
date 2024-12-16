import { PartialType } from '@nestjs/mapped-types';
import { CreateProdutoAlocadoDto } from './create-produto-alocado.dto';

export class UpdateProdutoAlocadoDto extends PartialType(CreateProdutoAlocadoDto) {}
