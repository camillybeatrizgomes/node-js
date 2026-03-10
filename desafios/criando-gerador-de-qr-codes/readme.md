# Gerador de QR Code e Password

Aplicação de linha de comando em Node.js com duas funcionalidades:

- gerar QR Code no terminal a partir de um link;
- gerar senha aleatória com regras definidas por variáveis de ambiente.

## Tecnologias

- Node.js (ES Modules)
- [`prompt`](https://www.npmjs.com/package/prompt)
- [`qrcode-terminal`](https://www.npmjs.com/package/qrcode-terminal)
- [`chalk`](https://www.npmjs.com/package/chalk)

## Como executar

1. Acesse a pasta do projeto:

```bash
cd desafio/criando-gerador-de-qr-codes
```

2. Instale as dependências:

```bash
npm install
```

3. Execute o projeto:

```bash
npm start
```

O script `start` usa:

```bash
node --env-file=.env src/index.js
```

## Fluxo da aplicação

Ao iniciar, o sistema pede uma opção:

- `1`: QR Code
- `2`: Password

### 1) QR Code

Quando você escolhe `1`, o app solicita:

- `link`: URL/texto para converter em QR Code
- `type`:
  - `1` = normal
  - `2` = pequeno (`small`) para melhor visualização no terminal

O QR Code é exibido diretamente no terminal.

### 2) Password

Quando você escolhe `2`, o app gera uma senha aleatória com base nas variáveis do arquivo `.env`.

## Configuração do `.env`

Exemplo atual:

```env
UPPERCASE_LETTERS = true
LOWERCASE_LETTERS = false
NUMBERS = true
SPECIAL_CHARACTERS = false
PASSWORD_LENGTH = 8
```

### Significado das variáveis

- `UPPERCASE_LETTERS`: inclui letras maiúsculas (`A-Z`)
- `LOWERCASE_LETTERS`: inclui letras minúsculas (`a-z`)
- `NUMBERS`: inclui números (`0-9`)
- `SPECIAL_CHARACTERS`: inclui caracteres especiais (`!@#$%^&*()-_`)
- `PASSWORD_LENGTH`: tamanho final da senha

## Estrutura do projeto

```text
src/
  index.js
  prompts/
    prompt-main.js
    prompt-qrcode.js
  services/
    qr-code/
      create.js
      handle.js
    password/
      create.js
      handle.js
```

## Observações

- Se nenhuma categoria de caracteres estiver com valor `true`, o gerador de senha não terá base para montar a senha.
- Para gerar senhas mais fortes, habilite mais de uma categoria e aumente `PASSWORD_LENGTH`.