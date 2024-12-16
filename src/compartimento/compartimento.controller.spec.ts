import { Test, TestingModule } from '@nestjs/testing';
import { CompartimentoController } from './compartimento.controller';
import { CompartimentoService } from './compartimento.service';

describe('CompartimentoController', () => {
  let controller: CompartimentoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CompartimentoController],
      providers: [CompartimentoService],
    }).compile();

    controller = module.get<CompartimentoController>(CompartimentoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
