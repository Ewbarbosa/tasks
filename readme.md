# Projeto - Tasks

## Instalação

Baixe o repositório e execute os comandos:
```cmd
    yarn install
    ou
    npm install
```

Após ter finalizado a instalação das dependências, altere a variável "DATABASE_URL" no arquivo ".env" de acordo com a configuração do seu Postgres e execute o comando abaixo para gerar a migration:
```cmd
    yarn prisma migrate dev
    ou
    npx prisma migrate dev
```

E por fim execute o comando abaixo para executar o projeto:
```cmd
    yarn dev
    ou
    npm run dev
```


## Instruções

1 - Acesse o end-point "/api/user" informando no body os dados conforme exemplo:
```json
{
	"username": "ewbarbosa",
	"password": "102030"
}
```


2 - Acesse a rota "/api/login" se autenticar e gerar um token. Segue exemplo:
```json
{
	"username": "ewbarbosa",
	"password": "102030"
}
```

O retorno será semelhante ao exemplo abaixo:
```json
{
	"id": 1,
	"username": "ewbarbosa",
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJld2JhcmJvc2EiLCJpYXQiOjE3MTgzMjg2MTEsImV4cCI6MTcxODMzMjIxMSwic3ViIjoiMSJ9.6e_-BLomRRBK57IHIzR0ouXyw3gOaSRkum6zXeX_P3o"
}
```


3 - Utilize o token para as rotas privadas.

4 - A aplicação deverá retornar um JSON de acordo com o end-point consumido. Exemplo "/api/task":.
```json
[
	{
		"id": 1,
		"title": "Nova tarefa",
		"description": "Uma nova tarefa",
		"userId": 1,
		"createdAt": "2024-06-13T23:25:16.574Z"
	}
]
```

## End-Points USER

POST - "/api/login"

POST - "/api/user"

## End-Points TASK

GET - "/task"

POST - "/task"

PUT - "/task/:id"

DELETE - "/task/:id"

PATCH - "/task/:id"


## Dependências:

postgres 16

typescript

express

prisma

bcryptjs

cors

dotenv

jsonwebtoken

express-async-errors