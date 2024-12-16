import { Test, TestingModule } from '@nestjs/testing';
import { ProdutoAlocadoController } from './produto-alocado.controller';
import { ProdutoAlocadoService } from './produto-alocado.service';

describe('ProdutoAlocadoController', () => {
  let controller: ProdutoAlocadoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProdutoAlocadoController],
      providers: [ProdutoAlocadoService],
    }).compile();

    controller = module.get<ProdutoAlocadoController>(ProdutoAlocadoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
