import { buildSchema, GraphQLSchema } from "graphql";

const postSchema: GraphQLSchema = buildSchema(`
  type Post {
    id: ID
    title: String
    body: String
    by_user: String
  }

  type Query {
    getPosts: [Post]
    getPostByUser(username: String!): Post
  }

  type Mutation {
    addPost(title: String!, body: String!, by_user: String!): Post
  }
`);

export default postSchema;
