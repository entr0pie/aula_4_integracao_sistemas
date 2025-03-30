# Aula 4 - Integração de Sistemas

## Iniciando o Banco de Dados

```sh
docker run -e MYSQL_ROOT_PASSWORD=secret -e MYSQL_DATABASE=AULA4 -p 3306:3306 mysql:latest
```

## Requests

- Criar produtos

```bash
curl --request POST \
  --url http://localhost:3000/produtos \
  --header 'content-type: application/json' \
  --data '{
    "nomeDoProduto": "Produto 1",
    "fornecedor": "Ponto do Seu Zé",
    "enderecoFornecedor": "Beco suspeito",
    "quantidade": 12,
    "descricao": "Muito bom",
    "dataRegistro": "2024-01-01",
    "dataUpdate": "2024-01-01"
}'
```

- Listar todos os produtos

```bash
curl --request GET \
  --url http://localhost:3000/produtos
```

- Buscar produto por id

```bash
curl --request GET \
  --url http://localhost:3000/produtos/1
```

- Atualizar produto

```bash
curl --request PUT \
  --url http://localhost:3000/produtos/1 \
  --header 'content-type: application/json' \
  --data '{
    "nomeDoProduto": "Produto 2",
    "fornecedor": "Ponto do Seu João",
    "enderecoFornecedor": "Beco nada suspeito",
    "quantidade": 15,
    "descricao": "Muito ruim",
    "dataRegistro": "2025-01-01",
    "dataUpdate": "2025-01-01"
}'
```

- Deletar produto

```bash
curl --request DELETE \
  --url http://localhost:3000/produtos/1
```