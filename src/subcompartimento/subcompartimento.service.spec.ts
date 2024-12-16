import { Test, TestingModule } from '@nestjs/testing';
import { SubcompartimentoService } from './subcompartimento.service';

describe('SubcompartimentoService', () => {
  let service: SubcompartimentoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SubcompartimentoService],
    }).compile();

    service = module.get<SubcompartimentoService>(SubcompartimentoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
