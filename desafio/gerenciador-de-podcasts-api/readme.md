# Gerenciador de Podcasts API

API RESTful desenvolvida em Node.js e TypeScript para gerenciar e filtrar episódios de podcasts. O projeto utiliza arquivos JSON como base de dados e não depende de frameworks como Express, focando em uma implementação simples e didática.

## Funcionalidades

- Listar todos os episódios de podcasts disponíveis
- Filtrar episódios por nome do podcast

## Estrutura dos Dados

Cada podcast possui o seguinte formato:

```json
{
	"podcastName": "Nome do Podcast",
	"episode": "Título do Episódio",
	"videoId": "ID do Vídeo",
	"categories": ["Categoria1", "Categoria2"]
}
```

## Instalação e Execução

1. **Clone o repositório e acesse a pasta:**
	 ```bash
	 git clone <repo-url>
	 cd desafio/gerenciador-de-podcasts-api
	 ```
2. **Instale as dependências:**
	 ```bash
	 npm install
	 ```
5. **Inicie o servidor em modo desenvolvimento:**
	 ```bash
	 npm run start:watch
	 ```

## Endpoints

### Listar todos os episódios

- **GET** `/api/list`
	- Retorna todos os episódios cadastrados.

### Filtrar episódios por nome do podcast

- **GET** `/api/filter?p=NomeDoPodcast`
	- Retorna apenas os episódios do podcast informado.
	- Exemplo: `/api/filter?p=Flow`

## Estrutura do Projeto

- `src/`
	- `app.ts` — Configuração da aplicação e roteamento
	- `server.ts` — Inicialização do servidor HTTP
	- `controllers/` — Lógica dos endpoints
	- `models/` — Tipos e interfaces dos dados
	- `repositories/` — Acesso aos dados (JSON)
	- `services/` — Regras de negócio
	- `utils/` — Utilitários e constantes

## Tecnologias Utilizadas

- Node.js
- TypeScript
- TSX (execução de TypeScript sem build manual)
- TSUP (build para produção)

## Scripts Disponíveis

- `npm run start:dev` — Inicia o servidor em modo desenvolvimento
- `npm run start:watch` — Inicia o servidor com hot reload
- `npm run dist` — Gera build de produção
- `npm run start:dist` — Executa build de produção

## Observações

- O projeto não utiliza banco de dados relacional ou NoSQL, apenas arquivos JSON.
- Ideal para fins didáticos e estudos de APIs REST com Node.js puro e TypeScript.


