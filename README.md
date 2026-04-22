# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

Ao utilizar o Vitae os arquivos js devem possuir a extenção .jsx

## Primeiros passos com Create React App

Este projeto foi inicializado com o  
[Create React App](https://github.com/facebook/create-react-app).

---

## Scripts disponíveis

### npx create-react-app <nome-do-projeto>

Cria um novo projeto utilizando o modelo tradicional do Create React App.

---

### npm create vite@latest

Cria um projeto de forma interativa utilizando o Vite (novo modelo).

Durante o processo, é necessário:
- Escolher o framework desejado
- Selecionar a variante do projeto

Após a criação do projeto, instale as dependências executando:

```bash
npm i
```

## Executando o projeto

No diretório do projeto, você pode executar os seguintes comandos:

### npm start

Executa a aplicação em modo de desenvolvimento.
Abra o endereço abaixo no navegador para visualizar a aplicação:
http://localhost:3000
Funcionalidades disponíveis nesse modo:
+ A página será recarregada automaticamente ao detectar alterações no código
+ Erros de lint podem ser visualizados diretamente no console

### npm run dev

Inicia a aplicação quando o projeto foi criado utilizando o Vite.

### npm test

Inicia o executor de testes em modo interativo (watch mode).
Para mais informações, consulte a documentação oficial:
https://facebook.github.io/create-react-app/docs/running-tests

### npm run build
Gera a versão de produção da aplicação na pasta build.
Durante o processo de build:

+ O React é empacotado em modo de produção
+ O código é otimizado para melhor desempenho
+ Os arquivos são minificados e recebem hashes em seus nomes

Após a finalização, a aplicação estará pronta para publicação.
Para mais detalhes, consulte:
https://facebook.github.io/create-react-app/docs/deployment

## Estrutura base

+ node_modules: Onde as dependencias do projetos ficam
+ public: Assets estáticos e HTML de inicialização
+ src: Onde é programado os apps
+ src/index.js: Arquivo de inicializaçào do React
+ src/Apps.js Componente principal da aplicaçào

## Extensão para React

+ ES7+ React/Redux/React-Native snippets
    Buscar por Rreact snippets

## Configutando Emmet

Em acesse as configurações File > Preference > Settings. Selecione a seção Extensions. Em Include language addione conforme abaixo: 

+ Item: javascript
+ Value: javascriptreact

## Criando componentes

+ A pastade componentes convencionada é a `components`
+ O nome dos arquivos devem ser nomeados com camel case: FileComponent.js

## Template Expressions

+ Sintaxe: `{ codigoJS }`

## Imagens

Imagens publicas ficam na pasta public e podem ser acessadas pela tag html informando no path `/nome_da_imagem.jpg`

Em outras pastas abaixo de src é necessário importrar a imagem em si
```js
    import City from './assets/city.jpg'

    <img src={City} alt="Cidade" /> 
```

## Hooks

Recursos do React que possuem diversas funções
Podem ser customizados
Todo hook inicia com o prefixo `use` e deve ser importado

### useState

+ Utilizado para gerenciar o estado de algum dado
+ Para guardar o dado definimos o nome da variável e para alterar vamos utilizar setNome, onde nome é o nome do nosso dado