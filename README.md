# Introduction

This project implements a simple REST API that manages contacts and associated phone numbers.
It uses __objection/knex__ to manage models and their mapping to the database (__postgresql__).
HTTP server based on __Koa__, a lightweight and async-friendly alternative to express.

# Requirements

* [postgresql](https://www.postgresql.org/)

# Installation

Run `npm i` to install dependencies.

# Configuration

This app takes a "configuration through JS" approach which can give more flexibility compared to regular JSON files. Config files are stored under `config` with `"{environment}.js"` naming pattern.

You can use `ENV` environment variable to specify the desired environment. Default one is `"development"`.

# Create database

Create an empty postgresql database and make sure its name and associated user credentials are matching to corresponding values in the config file.

Run `npm run db_migrate` to populate database structure.

Optionally you can specify an environment:
`npm run db_migrate -- --env production`

> Note: To roll back the last migration you can use `npm run db_rollback`

> Note: For more complex cases you may need to install `knex` CLI globally (along with postgresql driver) or directly invoke local version like this: `./node_modules/.bin/knex ...`

# Run specs

> Note: Make sure you created a development database.

Run `npm test`

# Run API sever and specs

> Note: Make sure you created a production database.

Run `npm start`
