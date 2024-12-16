import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CompartimentoService } from './compartimento.service';
import { Compartimento } from './entities/compartimento.entity';

@Controller('compartimento')
export class CompartimentoController {
  constructor(private readonly compartimentoService: CompartimentoService) {}

  @Post()
  create(@Body() compartimento: Compartimento): Promise<Compartimento> {
    return this.compartimentoService.create(compartimento);
  }

  @Get()
  findAll() {
    return this.compartimentoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.compartimentoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() compartimento) {
    return this.compartimentoService.update(+id, compartimento);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.compartimentoService.remove(+id);
  }
}
