import express, { Express } from 'express';
import gqlMiddleware from '../graphql';

const app: Express = express();

app.use(express.json());
app.use('/graphql', gqlMiddleware);

export default app;
