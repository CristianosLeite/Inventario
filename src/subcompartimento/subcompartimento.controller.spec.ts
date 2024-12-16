import { Test, TestingModule } from '@nestjs/testing';
import { SubcompartimentoController } from './subcompartimento.controller';
import { SubcompartimentoService } from './subcompartimento.service';

describe('SubcompartimentoController', () => {
  let controller: SubcompartimentoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SubcompartimentoController],
      providers: [SubcompartimentoService],
    }).compile();

    controller = module.get<SubcompartimentoController>(
      SubcompartimentoController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
