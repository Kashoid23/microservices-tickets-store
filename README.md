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

#### Create router auth/src/routes/users.ts
#### Create router auth/src/routes/sessions.ts
#### Update to use routers auth/src/index.ts

```
cd auth
npm install express-validator
```

#### Add body validation auth/src/routes/users.ts
#### Create abstract error class auth/src/errors/custom-error.ts
#### Create middleware auth/src/middlewares/error-handler.ts
#### Create custom error class auth/src/errors/request-validation-error.ts
#### Create custom error class auth/src/errors/database-connection-error.ts
#### Create custom error class auth/src/errors/not-found-error.ts
#### Init error handler middleware auth/src/index.ts
#### Update to throw errors auth/src/routes/users.ts