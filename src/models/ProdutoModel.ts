import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'Produto' })
export class ProdutoModel {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({ name: 'nome_do_produto' })
    nomeDoProduto: string;
    
    @Column({ name: 'fornecedor' })
    fornecedor: string;

    @Column({ name: 'endereco_fornecedor' })
    enderecoFornecedor: string;
    
    @Column({ name: 'quantidade' })
    quantidade: number;

    @Column({ name: 'descricao'})
    descricao: string;

    @Column({ name: 'data_registro'})
    dataRegistro: Date;

    @Column({ name: 'data_update' })
    dataUpdate: Date;
}