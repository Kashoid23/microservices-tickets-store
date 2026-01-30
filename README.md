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

#### [Create auth/src/index.ts](https://github.com/Kashoid23/microservices-tickets-store/commit/717dcb7126a90f6d665a27c64920077da52ac020#diff-0b5cb0a52d11370c3283ace8d2013a154bae71e8285809dd11eb4c4b1f6d34ab)
#### [Create auth/Dockerfile](https://github.com/Kashoid23/microservices-tickets-store/commit/717dcb7126a90f6d665a27c64920077da52ac020#diff-e8d8092a4a6211281e55aba080af4f1802dffa3c5fc26fecd152edb378839668)
#### [Create auth/.dockerignore](https://github.com/Kashoid23/microservices-tickets-store/commit/717dcb7126a90f6d665a27c64920077da52ac020#diff-642395e1504e5f124af50195de6738ac9a81c5c2cd4d0aebcebf019b225133eb)
#### [Create infra/k8s/auth-deployment.yaml](https://github.com/Kashoid23/microservices-tickets-store/commit/717dcb7126a90f6d665a27c64920077da52ac020#diff-f14c2afe65dfa9fe19e5cc32ac5f5e704a13ff5fb521188f81389639a52fadd0)
#### [Create infra/k8s/auth-service.yaml](https://github.com/Kashoid23/microservices-tickets-store/commit/717dcb7126a90f6d665a27c64920077da52ac020#diff-1939b6c25829cd041629fe63465bfad97194fa3620d1a64ca643ec54c80ac24e)
#### [Create infra/k8s/ingress-service.yaml](https://github.com/Kashoid23/microservices-tickets-store/commit/717dcb7126a90f6d665a27c64920077da52ac020#diff-9892cadf8fdba6a22e0c56f03faae1b2571c0d2df4f4556fc88ce161251f2bb2)
#### [Create skaffold.yaml](https://github.com/Kashoid23/microservices-tickets-store/commit/717dcb7126a90f6d665a27c64920077da52ac020#diff-cb88f836d7d2eec7bccbed73c47a452b8eb3e376b02bae73ecae449bba96214a)

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

#### [Create router auth/src/routes/users.ts](https://github.com/Kashoid23/microservices-tickets-store/commit/40bde82bc62d8f92894a1cb0387d9bbac99b8a7a#diff-9bd98c0e24c2e12c87aa3ea930bbb20797fc5791ab7dd316013e325eb0279eef)
#### [Create router auth/src/routes/login.ts](https://github.com/Kashoid23/microservices-tickets-store/commit/0e0abd007863c975d1e55a80f4d74a3e284ac111#diff-df9c77d948cce73ae30ce968c3134d7f3e3eeac30b320ebe394434735dc51ba0)
#### [Create router auth/src/routes/logout.ts](https://github.com/Kashoid23/microservices-tickets-store/commit/0e0abd007863c975d1e55a80f4d74a3e284ac111#diff-b2af90c0eb5bfdae3a451a316cfb180eba9348514028e59f2f7e932ac6e183e0)
#### [Import routers to auth/src/index.ts](https://github.com/Kashoid23/microservices-tickets-store/commit/0e0abd007863c975d1e55a80f4d74a3e284ac111#diff-0b5cb0a52d11370c3283ace8d2013a154bae71e8285809dd11eb4c4b1f6d34ab)

```
cd auth
npm install express-validator
```

#### [Add body validation auth/src/routes/users.ts](https://github.com/Kashoid23/microservices-tickets-store/commit/af296166fa7e86ca999b6ef2a81c7a5ab570e818#diff-9bd98c0e24c2e12c87aa3ea930bbb20797fc5791ab7dd316013e325eb0279eef)
#### [Create abstract error class auth/src/errors/custom-error.ts](https://github.com/Kashoid23/microservices-tickets-store/commit/0209591ba58c1c8e1336d63a4b35b5258188a7ae#diff-026f5c582d0ebf0d71338e7ac78528a7a5df2e41436d2d51059897787b88eebf)
#### [Create middleware auth/src/middlewares/error-handler.ts](https://github.com/Kashoid23/microservices-tickets-store/commit/0209591ba58c1c8e1336d63a4b35b5258188a7ae#diff-fe87095712c5c72d8bfb3461448873624cd3215c7ee98f65b6c01aeb141c1c59)
#### [Create custom error class auth/src/errors/request-validation-error.ts](https://github.com/Kashoid23/microservices-tickets-store/commit/0209591ba58c1c8e1336d63a4b35b5258188a7ae#diff-1ebe78963b61e3f5e5594b3d5bc4e387cca4e0fd3973dfeba0765ca20270f6fc)
#### [Create custom error class auth/src/errors/database-connection-error.ts](https://github.com/Kashoid23/microservices-tickets-store/commit/0209591ba58c1c8e1336d63a4b35b5258188a7ae#diff-47f9459817492be98b668f19a3352766cb284028eb65da40dc303f55986ec487)
#### [Create custom error class auth/src/errors/not-found-error.ts](https://github.com/Kashoid23/microservices-tickets-store/commit/0209591ba58c1c8e1336d63a4b35b5258188a7ae#diff-9e25bf5de7655407e18c67ea40a1d704c1f5d032733efdabf5b42dd0b9f0cd6f)
#### [Init error handler middleware auth/src/index.ts](https://github.com/Kashoid23/microservices-tickets-store/commit/0209591ba58c1c8e1336d63a4b35b5258188a7ae#diff-0b5cb0a52d11370c3283ace8d2013a154bae71e8285809dd11eb4c4b1f6d34ab)
#### [Update to throw errors auth/src/routes/users.ts](https://github.com/Kashoid23/microservices-tickets-store/commit/0209591ba58c1c8e1336d63a4b35b5258188a7ae#diff-9bd98c0e24c2e12c87aa3ea930bbb20797fc5791ab7dd316013e325eb0279eef)

# Section 8

## Connecting to MongoDB

Used Docker Image: https://hub.docker.com/_/mongo

#### [Create infra/k8s/auth-mongo-deployment.yaml](https://github.com/Kashoid23/microservices-tickets-store/commit/634a1106ac7f5663084fa5c74f1aa20f3d6e6a97#diff-a06082130702fcfbb65d67ba955ae24a29e93f91f59ea8acdcb87c124b413bb9)

Default port for MongoDB is 27017

#### [Create infra/k8s/auth-mongo-service.yaml](https://github.com/Kashoid23/microservices-tickets-store/commit/634a1106ac7f5663084fa5c74f1aa20f3d6e6a97#diff-6c712b16a65b299bf93ad04eaa3bc8d71c95e2057529cfa815123facc3a44b8d)

```
docker pull mongo
skaffold dev
```

```
cd auth
npm install mongoose @types/mongoose
```

mongodb://username:password@hostname:port/database_name

#### [Connect MongoDB instance auth/src/index.ts](https://github.com/Kashoid23/microservices-tickets-store/commit/634a1106ac7f5663084fa5c74f1aa20f3d6e6a97#diff-0b5cb0a52d11370c3283ace8d2013a154bae71e8285809dd11eb4c4b1f6d34ab)

> <b>Mongoose</b> is an <b>Object Data Modeling (ODM)</b> library for MongoDB and Node.js that maps code objects to MongoDB documents.

- Mongoose <b>Schema</b> - defines the structure of the document, default values, validators, etc. It is the blueprint for the data.
- Mongoose <b>Model</b> - a constructor compiled from Schema definitions. It is used to create and read documents from the underlying MongoDB database.
- Mongoose <b>Document</b> - an instance of a Model, representing a single record in the database.
- Mongoose <b>Collection</b> - a grouping of MongoDB documents (analogous to a table in relational databases).

Common Data Types

- String
- Number
- Date
- Buffer (Binary data)
- Boolean
- Mixed (An {} type)
- ObjectId (Unique identifier, _id)
- Array
- Decimal128

## Signup

#### [Create Mongoose Schema and Model auth/src/models/user.ts](https://github.com/Kashoid23/microservices-tickets-store/commit/159fb0224dcc7862dbe82d75aa2538d4ea4aa3a3#diff-f5f12a593a24caa2e2be6ca829c14399b70f7034f17ebecae45276505408cca8)
#### [Handle email already exists error auth/src/errors/bad-request-error.ts](https://github.com/Kashoid23/microservices-tickets-store/commit/159fb0224dcc7862dbe82d75aa2538d4ea4aa3a3#diff-00e6b029ee1e36f2fd68472cfe1ca4599e0f146140888068208c6614f59d3033)
#### [Update POST v1/users router auth/src/routes/users.ts](https://github.com/Kashoid23/microservices-tickets-store/commit/159fb0224dcc7862dbe82d75aa2538d4ea4aa3a3#diff-9bd98c0e24c2e12c87aa3ea930bbb20797fc5791ab7dd316013e325eb0279eef)
#### [Create Password helper for hashing and comparing auth/src/helpers/password.ts](https://github.com/Kashoid23/microservices-tickets-store/commit/ea905e07a83089d698176b8a6f4edfc0c12cdc5f#diff-59907f4d668cfe5becd84aae9108fe15852e9a2e04c71569c059388fe3d52ce9)
#### [Set hashed password before saving to DB auth/src/models/user.ts](https://github.com/Kashoid23/microservices-tickets-store/commit/ea905e07a83089d698176b8a6f4edfc0c12cdc5f#diff-f5f12a593a24caa2e2be6ca829c14399b70f7034f17ebecae45276505408cca8)

# Section 9

## Authentication strategies and options

#### Session-based Authentication

Session-based authentication is the traditional and most widely used method for web applications. The server stores session data, and the client identifies itself using a session ID stored in cookies.

- You are building a traditional web app
- Backend and frontend share the same domain
- You want maximum security with minimal complexity

<kbd><img width="630" height="450" alt="image" src="https://github.com/user-attachments/assets/e99f311f-8b9c-4b29-a033-b25abf87205f" /></kbd>

#### Token-based Authentication

JWT authentication uses self-contained tokens that are issued by the server and stored on the client. The token is sent with every request for authentication.

> Authorization: Bearer header.payload.signature

OR

> x-access-token: header.payload.signature

For Server-Side Rendering (SSR) applications, the most secure and effective way to store JWTs is using HttpOnly, Secure cookies. This approach allows the server to access the token for initial rendering while protecting it from XSS (Cross-Site Scripting) attacks, as JavaScript cannot access the cookie. 

- You are building APIs or microservices
- You need stateless authentication
- You expect horizontal scaling

<kbd><img width="640" height="460" alt="image" src="https://github.com/user-attachments/assets/76eb71d0-4fa9-4c8e-a526-d374c6829841" /></kbd>

#### OAuth 2.0 Authentication

OAuth 2.0 is an industry-standard authorization framework used for delegated access. It allows users to grant access to third-party applications without sharing credentials.

- You need third-party login
- You have multiple client types
- You are building enterprise-grade systems

## Authentication strategies comparison

#### Security

<img width="639" height="468" alt="image" src="https://github.com/user-attachments/assets/dcf4c438-0092-4f79-b422-46ed6f734580" />

#### Performance

<img width="635" height="338" alt="image" src="https://github.com/user-attachments/assets/6dea9bbf-33a0-4590-b7ff-4bf24e3d48c6" />

#### Complexity

<img width="635" height="270" alt="image" src="https://github.com/user-attachments/assets/bf4a70fc-3cf3-4747-937d-021e6d737c83" />

#### Add session support

```
cd auth
npm i cookie-session @types/cookie-session
```

#### [Use cookieSession for auth/src/index.ts](https://github.com/Kashoid23/microservices-tickets-store/commit/b5f6aeba59788b88df2fc588862ed78784dd7490#diff-0b5cb0a52d11370c3283ace8d2013a154bae71e8285809dd11eb4c4b1f6d34ab)

```
cd auth
npm i jsonwebtoken @types/jsonwebtoken
```

#### [Generate a JWT auth/src/routes/users.ts](https://github.com/Kashoid23/microservices-tickets-store/commit/b5f6aeba59788b88df2fc588862ed78784dd7490#diff-9bd98c0e24c2e12c87aa3ea930bbb20797fc5791ab7dd316013e325eb0279eef)

#### Create a Kubernetes secret

```
kubectl create secret generic jwt-secret --from-literal=JWT_SIGN=a4Doo52
kubectl get secrets
```

#### [Set ENV var referred to Kubernetes secrets infra/k8s/auth-deployment.yaml](https://github.com/Kashoid23/microservices-tickets-store/commit/4edcf1fa6eb38d6208e21b763662928b633046fd#diff-f14c2afe65dfa9fe19e5cc32ac5f5e704a13ff5fb521188f81389639a52fadd0)

#### [Read JWT_SIGN ENV var auth/src/routes/users.ts](https://github.com/Kashoid23/microservices-tickets-store/commit/4edcf1fa6eb38d6208e21b763662928b633046fd#diff-9bd98c0e24c2e12c87aa3ea930bbb20797fc5791ab7dd316013e325eb0279eef)

#### Formatting POST v1/users response auth/src/models/user.ts

## Login

#### Add v1/login path to infra/k8s/ingress-service.yaml

#### Create shared validateRequest middleware auth/src/middlewares/validate-request.ts

#### Init validateRequest middleware auth/src/routes/users.ts

#### Check email, compare password, set JWT then return user auth/src/routes/login.ts

## Current user

#### Check session.jwt, verify JWT and return JWT payload or null as currentUser auth/src/routes/users.ts

#### Create Current user middleware auth/src/middlewares/current-user.ts

#### Use Current user middleware auth/src/routes/users.ts

#### Create unauthorized error class auth/src/errors/unathorized-error.ts

#### Create authorize middleware to handle unauthorized requests auth/src/middlewares/authorize.ts

## Logout

#### Add v1/logout path to infra/k8s/ingress-service.yaml

#### Destroying a session auth/src/routes/logout.ts
