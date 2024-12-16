import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm';
import { TipoProduto } from 'src/tipo-produto/entities/tipo-produto.entity';
import { ProdutoAlocado } from 'src/produto-alocado/entities/produto-alocado.entity';

@Entity('produtos')
export class Produto {
  @PrimaryGeneratedColumn()
  id_prod: number;

  @Column()
  cod_prod: string;

  @Column()
  desc_prod: string;

  @Column()
  fabricante: string;

  @OneToOne(() => TipoProduto, (tipoProduto) => tipoProduto.produto)
  tipoProduto: TipoProduto;

  @OneToOne(() => ProdutoAlocado, (produtoAlocado) => produtoAlocado.produto)
  produtoAlocado: ProdutoAlocado;
}
