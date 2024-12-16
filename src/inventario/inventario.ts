import { Produto } from 'src/produto/entities/produto.entity';
import { ProdutoAlocado } from 'src/produto-alocado/entities/produto-alocado.entity';
import { Estoque } from 'src/estoque/estoque';

export class Inventario {
  produtos: Produto[];
  produtosAlocados: ProdutoAlocado[];
  Estoque: Estoque;

  getInventario(): Produto[] {
    // Inventário é igual a todos os produtos com quantidade maior que 0
    return this.produtos;
  }

  getProdutosAlocados(): ProdutoAlocado[] {
    return this.produtosAlocados;
  }

  getEstoque(): Produto[] {
    return this.Estoque.getProdutos();
  }
}
