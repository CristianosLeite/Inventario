import { Produto } from '../produto/entities/produto.entity';
import { ProdutoAlocado } from 'src/produto-alocado/entities/produto-alocado.entity';

export class Estoque {
  produtos: Produto[];
  produtosAlocados: ProdutoAlocado[];

  getProdutos(): Produto[] {
    // Estoque é igual a todo produto que não está alocado em um cliente/fornecedor
    return this.produtos.filter((produto) => {
      return !this.produtosAlocados.some(
        (produtoAlocado) =>
          produtoAlocado.produto.id_prod === produto.id_prod &&
          produtoAlocado.clienteFornecedor !== null,
      );
    });
  }
}
