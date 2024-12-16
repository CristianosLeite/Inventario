import { Test, TestingModule } from '@nestjs/testing';
import { ProdutoAlocadoService } from './produto-alocado.service';

describe('ProdutoAlocadoService', () => {
  let service: ProdutoAlocadoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProdutoAlocadoService],
    }).compile();

    service = module.get<ProdutoAlocadoService>(ProdutoAlocadoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
