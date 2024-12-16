import { Module } from '@nestjs/common';
import { CompartimentoService } from './compartimento.service';
import { CompartimentoController } from './compartimento.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Compartimento } from './entities/compartimento.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Compartimento])],
  controllers: [CompartimentoController],
  providers: [CompartimentoService],
})
export class CompartimentoModule {}
