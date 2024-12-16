import { Test, TestingModule } from '@nestjs/testing';
import { CompartimentoService } from './compartimento.service';

describe('CompartimentoService', () => {
  let service: CompartimentoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CompartimentoService],
    }).compile();

    service = module.get<CompartimentoService>(CompartimentoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
