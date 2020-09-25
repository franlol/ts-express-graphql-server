## GraphQL Middleware and Express Server - TypeScript

GraphQL Middleware Test Server, created with [Express-GraphQL](https://graphql.org/graphql-js/express-graphql/) and [TypeScript](https://www.typescriptlang.org/).

#### Requeriments

Node.js

#### Wanna test?

Follow this steps:

>git clone

>npm install

>npm run dev

>http://localhost:3001/graphql

Then just try some mutation to add a user:

```javascript
  mutation {
    addUser(username: "fran", password: "encriptedPassword") {
      username
    }
  }
```

and then do a query to get all users:

```javascript
  query {
    getAllUsers {
      username
    }
  }
 ```
