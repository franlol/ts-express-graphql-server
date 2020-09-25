import { buildSchema, GraphQLSchema } from "graphql";

const userSchema: GraphQLSchema = buildSchema(`
  type User {
    username: String!
    password: String
    token: String
  }

  type Query {
    getUser(username: String!): User
    getAllUsers: [User]
  }

  type Mutation {
    addUser(username: String!, password: String!): User
  }
`);

export default userSchema;
