import { PartialType } from '@nestjs/mapped-types';
import { CreateTipoProdutoDto } from './create-tipo-produto.dto';

export class UpdateTipoProdutoDto extends PartialType(CreateTipoProdutoDto) {}
