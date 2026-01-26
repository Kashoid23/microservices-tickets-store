# Section 5

## Auth service

```
mkdir auth
cd auth
npm init -y
npm install --save-dev express @types/express typescript ts-node-dev
npx tsc --init
```

```
mkdir src
```

#### [Create auth/src/index.ts](https://github.com/Kashoid23/microservices-tickets-store/blob/717dcb7126a90f6d665a27c64920077da52ac020/auth/src/index.ts)
#### [Create auth/Dockerfile](https://github.com/Kashoid23/microservices-tickets-store/blob/717dcb7126a90f6d665a27c64920077da52ac020/auth/Dockerfile)
#### [Create auth/.dockerignore](https://github.com/Kashoid23/microservices-tickets-store/blob/717dcb7126a90f6d665a27c64920077da52ac020/auth/.dockerignore)
#### [Create infra/k8s/auth-deployment.yaml](https://github.com/Kashoid23/microservices-tickets-store/blob/717dcb7126a90f6d665a27c64920077da52ac020/infra/k8s/auth-deployment.yaml)
#### [Create infra/k8s/auth-service.yaml](https://github.com/Kashoid23/microservices-tickets-store/blob/717dcb7126a90f6d665a27c64920077da52ac020/infra/k8s/auth-service.yaml)
#### [Create infra/k8s/ingress-service.yaml](https://github.com/Kashoid23/microservices-tickets-store/blob/717dcb7126a90f6d665a27c64920077da52ac020/infra/k8s/ingress-service.yaml)
#### [Create skaffold.yaml](https://github.com/Kashoid23/microservices-tickets-store/blob/717dcb7126a90f6d665a27c64920077da52ac020/skaffold.yaml)

```
sudo nano /etc/hosts
```

#### /etc/hosts

```
...

127.0.0.1 tickets.store
```

```
skaffold dev
```

```
open http://tickets.store/v1/users/current
```

# Section 7

## Response Normalization

#### [Create router auth/src/routes/users.ts](https://github.com/Kashoid23/microservices-tickets-store/blob/40bde82bc62d8f92894a1cb0387d9bbac99b8a7a/auth/src/routes/users.ts)
#### [Create router auth/src/routes/sessions.ts](https://github.com/Kashoid23/microservices-tickets-store/blob/40bde82bc62d8f92894a1cb0387d9bbac99b8a7a/auth/src/routes/sessions.ts)
#### [Update to use routers auth/src/index.ts](https://github.com/Kashoid23/microservices-tickets-store/blob/40bde82bc62d8f92894a1cb0387d9bbac99b8a7a/auth/src/index.ts)

```
cd auth
npm install express-validator
```

#### [Add body validation auth/src/routes/users.ts](https://github.com/Kashoid23/microservices-tickets-store/blob/af296166fa7e86ca999b6ef2a81c7a5ab570e818/auth/src/routes/users.ts)
#### [Create abstract error class auth/src/errors/custom-error.ts](https://github.com/Kashoid23/microservices-tickets-store/blob/0209591ba58c1c8e1336d63a4b35b5258188a7ae/auth/src/errors/custom-error.ts)
#### [Create middleware auth/src/middlewares/error-handler.ts](https://github.com/Kashoid23/microservices-tickets-store/blob/0209591ba58c1c8e1336d63a4b35b5258188a7ae/auth/src/middlewares/error-handler.ts)
#### [Create custom error class auth/src/errors/request-validation-error.ts](https://github.com/Kashoid23/microservices-tickets-store/blob/0209591ba58c1c8e1336d63a4b35b5258188a7ae/auth/src/errors/request-validation-error.ts)
#### [Create custom error class auth/src/errors/database-connection-error.ts](https://github.com/Kashoid23/microservices-tickets-store/blob/0209591ba58c1c8e1336d63a4b35b5258188a7ae/auth/src/errors/database-connection-error.ts)
#### [Create custom error class auth/src/errors/not-found-error.ts](https://github.com/Kashoid23/microservices-tickets-store/blob/0209591ba58c1c8e1336d63a4b35b5258188a7ae/auth/src/errors/not-found-error.ts)
#### [Init error handler middleware auth/src/index.ts](https://github.com/Kashoid23/microservices-tickets-store/blob/0209591ba58c1c8e1336d63a4b35b5258188a7ae/auth/src/index.ts)
#### [Update to throw errors auth/src/routes/users.ts](https://github.com/Kashoid23/microservices-tickets-store/blob/0209591ba58c1c8e1336d63a4b35b5258188a7ae/auth/src/routes/users.ts)

# Section 8

## Connecting to MongoDB

Used Docker Image: https://hub.docker.com/_/mongo

#### Create infra/k8s/auth-mongo-deployment.yaml

Default port for MongoDB is 27017

#### Create infra/k8s/auth-mongo-service.yaml

```
docker pull mongo
skaffold dev
```

```
cd auth
npm install mongoose @types/mongoose
```

mongodb://username:password@hostname:port/database_name

#### Connect MongoDB instance auth/src/index.ts
