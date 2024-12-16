import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { LocalService } from './local.service';
import { Local } from './entities/local.entity';

@Controller('local')
export class LocalController {
  constructor(private readonly localService: LocalService) {}

  @Post()
  create(@Body() local: Local): Promise<Local> {
    return this.localService.create(local);
  }

  @Get()
  findAll(): Promise<Local[]> {
    return this.localService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Local[]> {
    return this.localService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() local: Local): Promise<Local> {
    return this.localService.update(+id, local);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.localService.remove(+id);
  }
}
