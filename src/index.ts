import express, { Express } from 'express';
import dotenv from 'dotenv';
import dbService from './db/db.service';
import { ApolloServer } from 'apollo-server-express';
import { typeDefs } from './graphql/config';
import { resolvers } from './graphql/config/resolvers';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

async function startServer() {
  dbService.services.mongo.connect();

  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers: [
      resolvers
    ]
  });

  await apolloServer.start()
  apolloServer.applyMiddleware({ app });

  app.listen(port, () => {
    console.log(`[server]: Server is running at https://localhost:${port}`);
  });
}

startServer();