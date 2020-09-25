import { GraphQLSchema } from "graphql";
import { mergeSchemas } from "graphql-tools";

import postSchema from './Post/postSchema';
import userSchema from './User/userSchema';

const schemas: GraphQLSchema = mergeSchemas({
  schemas: [
    postSchema,
    userSchema
  ]
});

export default schemas;
