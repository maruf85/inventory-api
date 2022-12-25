## Description

Inventory GraphQL Back-end Service

## Installation

```bash
$ npm install
```

## Set the database connection

create .env and adjust the DATABASE_URL environment variable to look as follows:

```bash
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE?sslmode=verify-full"
```

Replace the placeholders spelled in all uppercase letters with your database credentials.

## Databse Migration

```base
$ npx prisma migrate dev --name migration-name --create-only
```

## Running the app

```bash
# development
$ npm run dev

# production mode
$ npm run start:prod
```

## GraphQL playground

```bash
http://localhost:3000/graphql
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```