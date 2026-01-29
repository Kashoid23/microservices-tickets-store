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
#### [Create router auth/src/routes/login.ts](https://github.com/Kashoid23/microservices-tickets-store/blob/0e0abd007863c975d1e55a80f4d74a3e284ac111/auth/src/routes/login.ts)
#### [Create router auth/src/routes/logout.ts](https://github.com/Kashoid23/microservices-tickets-store/blob/0e0abd007863c975d1e55a80f4d74a3e284ac111/auth/src/routes/logout.ts)
#### Import routers to auth/src/index.ts

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

#### Create Mongoose Schema and Model auth/src/models/user.ts
#### Handle email already exists error auth/src/errors/bad-request-error.ts
#### Update POST v1/users router auth/src/routes/users.ts
#### Create Password helper for hashing and comparing auth/src/helpers/password.ts
#### Set hashed password before saving to DB auth/src/models/user.ts

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

## Comparison

#### Security

<img width="639" height="468" alt="image" src="https://github.com/user-attachments/assets/dcf4c438-0092-4f79-b422-46ed6f734580" />

#### Performance

<img width="635" height="338" alt="image" src="https://github.com/user-attachments/assets/6dea9bbf-33a0-4590-b7ff-4bf24e3d48c6" />

#### Complexity

<img width="635" height="270" alt="image" src="https://github.com/user-attachments/assets/bf4a70fc-3cf3-4747-937d-021e6d737c83" />

