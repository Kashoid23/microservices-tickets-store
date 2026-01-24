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

#### Create auth/src/routes/users.ts
#### Create auth/src/routes/sessions.ts
#### Update auth/src/index.ts


```
cd auth
npm install express-validator
```

#### Add validation auth/src/routes/users.ts