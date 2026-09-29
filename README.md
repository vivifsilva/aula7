# Sistema de Gerenciamento de Patrimônio

## Sobre o projeto

Esta aplicação foi desenvolvida para facilitar o gerenciamento de itens de patrimônio.

Por meio da API é possível consultar os registros existentes, adicionar novos patrimônios, atualizar informações e remover registros.

As informações utilizadas pela aplicação ficam armazenadas em um arquivo no formato JSON.

## Tecnologias

O projeto foi desenvolvido utilizando:

* Node.js
* Express
* JavaScript
* JSON

## Como instalar

Primeiramente, instale as dependências necessárias utilizando o comando:

```bash
npm install
```

## Como executar

Para iniciar o servidor, utilize:

```bash
node servidor/server.js
```

Após iniciar, a API estará disponível na porta 3000:

```text
http://localhost:3000/inventario
```

## Endpoints da API

| Método | Endpoint          | Descrição                        |
| ------ | ----------------- | -------------------------------- |
| GET    | `/inventario`     | Exibe os patrimônios cadastrados |
| POST   | `/inventario`     | Adiciona um novo patrimônio      |
| PUT    | `/inventario/:id` | Modifica um patrimônio existente |
| DELETE | `/inventario/:id` | Remove um patrimônio             |

## Testando as rotas

### Consulta — GET

Requisição:

```text
GET http://localhost:3000/inventario
```

Essa rota retorna os registros atualmente armazenados no inventário.

### Cadastro — POST

Requisição:

```text
POST http://localhost:3000/inventario
```

Exemplo de dados enviados:

```json
{
    "id": 3,
    "item": "Mouse",
    "local": "Laboratório 02",
    "dataRegistro": "2026-09-29",
    "valor": 50,
    "patrimonio": "PAT-00127"
}
```

Resposta obtida:

```text
Cadastro recebido
```

### Atualização — PUT

Requisição:

```text
PUT http://localhost:3000/inventario/1
```

Exemplo de informações enviadas:

```json
{
    "item": "Notebook Dell Atualizado",
    "local": "Laboratório 02",
    "dataRegistro": "2026-09-29",
    "valor": 4000,
    "patrimonio": "PAT-00125"
}
```

Resposta:

```text
Cadastro atualizado com sucesso
```

### Exclusão — DELETE

Requisição:

```text
DELETE http://localhost:3000/inventario/2
```

Resposta:

```text
Cadastro Excluido com Sucesso!
```

## Evidências

Os endpoints foram testados utilizando o Thunder Client.

Os registros dos testes estão disponíveis na pasta `evidencias`, contendo as verificações das operações de:

* GET — consulta dos patrimônios;
* POST — inclusão de um novo registro;
* PUT — atualização de um cadastro;
* DELETE — remoção de um registro.
