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

#### Create auth/src/index.ts
#### Create auth/Dockerfile
#### Create auth/.dockerignore
#### Create infra/k8s/auth-deployment.yaml
#### Create infra/k8s/auth-service.yaml
#### Create skaffold.yaml

```
skaffold dev
```

#### Create infra/k8s/ingress-service.yaml

```
sudo nano /etc/hosts
```

#### /etc/hosts

```
...

127.0.0.1 tickets.store
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