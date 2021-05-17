## NestJS rest api for react-native seed project

* NestJs
* TypeORM
* Docker

## Sample Todo List App API
Typical CRUD operations on a Todo List (add new todo, complete a todo, remove completed todos)

Front end project: https://github.com/thoersch/react-native-ts-seed

## Running to App locally

* update the `.env` file to point to your db instance / container
* `npm run typeorm:migration:run`
* `npm run build`
* `npm run start:dev`

## Bulding & Running from container

* Build & Run container: `docker compose up --build`

## License

Copyright © 2021 Tyler Hoersch

Distributed under the Eclipse Public License either version 1.0 or (at
your option) any later version.