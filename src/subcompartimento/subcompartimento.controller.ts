import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SubcompartimentoService } from './subcompartimento.service';
import { Subcompartimento } from './entities/subcompartimento.entity';

@Controller('subcompartimento')
export class SubcompartimentoController {
  constructor(
    private readonly subcompartimentoService: SubcompartimentoService,
  ) {}

  @Post()
  create(@Body() subcompartimento: Subcompartimento) {
    return this.subcompartimentoService.create(subcompartimento);
  }

  @Get()
  findAll(): Promise<Subcompartimento[]> {
    return this.subcompartimentoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Subcompartimento> {
    return this.subcompartimentoService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() subcompartimento: Subcompartimento,
  ): Promise<Subcompartimento> {
    return this.subcompartimentoService.update(+id, subcompartimento);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.subcompartimentoService.remove(+id);
  }
}
