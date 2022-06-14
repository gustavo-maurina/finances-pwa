# Finances PWA workflow

## Rodar o projeto

Instalar dependências com:

```bash
npm install
```

Rodar o projeto com:

```bash
npm run start
```

Para ver a aplicação rodando em modo de desenvolvimento, acesse: `http://localhost:3000`

## Testar PWA

Para buildar e testar funcionalidade do PWA, rodar:

```bash
npm run build
```

Depois disso, após gerada a pasta `build`, executar na raíz do projeto:

```bash
serve -s build
```

Abrir o navegador e acessar a URL: `http://localhost:3000`

obs: `serve` é um comando global, para instalar o pacote, execute:

```bash
yarn global add serve
```
