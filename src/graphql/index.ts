import { graphqlHTTP } from "express-graphql";

import schemas from './schemas';
import resolvers from './resolvers';

const gqlMiddleware = graphqlHTTP({
  schema: schemas,
  rootValue: resolvers,
  graphiql: true
});

export default gqlMiddleware;
