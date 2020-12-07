<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
  <a href="https://typeorm.io/" target="blank"><img src="https://github.com/typeorm/typeorm/raw/master/resources/logo_big.png" width="320" alt="TypeORM Logo" /></a>
  <a href="https://www.postgresql.org/" target="blank"><img src="https://i0.wp.com/www.computersnyou.com/wp-content/uploads/2014/12/postgresql-logo.png?resize=610%2C280&ssl=1" width="400" alt="TypeORM Logo" /></a>
</p>

## Description

Small touch to [Nest](https://github.com/nestjs/nest) in example of creating Rest API and using [Postgres](https://github.com/postgres/postgres) in **JS/TS** (with using [TypeORM](https://github.com/typeorm/typeorm))

## Running the app

**Note:** _You need to create a table "Products" in your local Postgres database with default settings (otherwise you can change TypeORM settings in the src/app/app.module.ts/ file) and of course to have that Postgres server's run localy!_

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
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
