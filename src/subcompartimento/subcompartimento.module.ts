import { Module } from '@nestjs/common';
import { SubcompartimentoService } from './subcompartimento.service';
import { SubcompartimentoController } from './subcompartimento.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Subcompartimento } from './entities/subcompartimento.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Subcompartimento])],
  controllers: [SubcompartimentoController],
  providers: [SubcompartimentoService],
})
export class SubcompartimentoModule {}
