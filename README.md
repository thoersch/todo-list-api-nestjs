## NestJS rest api for react-native seed project

* NestJs
* TypeORM
* Docker
* Kubernetes

## Sample Todo List App API
Typical CRUD operations on a Todo List (add new todo, complete a todo, remove completed todos)

Front end project: https://github.com/thoersch/react-native-ts-seed

## Running to App locally

* update the `.env` file to point to your db instance / container
* `npm run typeorm:migration:run`
* `npm run build`
* `npm run start:dev`

## Bulding & Running from container (will launch a postgres container too)

* Build & Run container: `docker compose up --build`

## Kubernetes (minikube)

Prerequisities for minikube:
* `brew install hyperkit`
* `brew install minikube`

Start the minikube cluster
* `minikube start --vm-driveer=hyperkit`

Verify cluster exists and ready:
* `kubectl get nodes`

Apply stack:
* `kubectl apply -f todo-list-pg-secret.yml`
* `kubectl apply -f todo-list-pg-configmap.yml`
* `kubectl apply -f todo-list-pg-deployment.yml`
* `kubectl apply -f todo-list-deployment.yml`

Get our k8s url for our service in our minikube cluster
* `minikube service todo-list-api-service`

```
$>
|-----------|-----------------------|-------------|---------------------------|
| NAMESPACE |         NAME          | TARGET PORT |            URL            |
|-----------|-----------------------|-------------|---------------------------|
| default   | todo-list-api-service |        8080 | http://some.ext.ip:30000  |
|-----------|-----------------------|-------------|---------------------------|
🎉  Opening service default/todo-list-api-service in default browser...
```

Veryify by testing: `http://some.ext.ip:30000/todos`, which should resolve and return an empty array.

## License

Copyright © 2021 Tyler Hoersch

Distributed under the Eclipse Public License either version 1.0 or (at
your option) any later version.