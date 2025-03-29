CREATE DATABASE IF NOT EXISTS AULA4;
USE AULA4;

CREATE TABLE IF NOT EXISTS Produto (
    id INT NOT NULL AUTO_INCREMENT,
    nome_do_produto VARCHAR(255),
    fornecedor VARCHAR(255),
    endereco_fornecedor VARCHAR(255),
    quantidade INT,
    descricao VARCHAR(255),
    data_registro DATETIME,
    data_update DATETIME,
    PRIMARY KEY (id)
);
