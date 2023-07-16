# MVP2

Este projeto foi desenvolvido para a matéria MVP2 do mestrado em Desenvolvimento FullStack da PUCRIO.
Bem vindo ao FinPlan, um sistema de gestão financeira inteligente que permite planejar e fazer análises financeiras, integrando gastos de diferentes moedas.

## Pré requisitos

Para rodar este projeto é necessário possuir configurado em sua máquina:

- NodeJS
- Npm

## Inicialização

Para começar é necessário clonar este repositório localmente em alguma pasta do seu diretório local.
Após a clonagem, inicie pela instalação das dependências do projeto, rode o seguinte comando na raiz do projeto:

```
npm install
```

Após instaladas as dependências, é preciso inicializar a camada que simula a API, execute o seguinte comando na raiz do projeto:

```
npx json-server --watch db.json --port 3001
```

Este comando irá inicializar a API na porta 3001.

Após inicializada a API, será necessário executar (também na raiz do projeto):

```
npm start
```

E então navegar para http://localhost:3000 em qualquer navegador e já está pronto para interagir com o sistema FinPlan.
