import express from "express";
import { ApolloServer } from "apollo-server-express";
import mongoose from "mongoose";

const typeDefs = `type Query { hello: String }`;
const resolvers = { Query: { hello: () => "Hello World!" } };

async function start() {
  await mongoose.connect("mongodb://127.0.0.1:27017/collablite");
  const app = express();

  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start();
  server.applyMiddleware({ app });

  app.listen(4000, () =>
    console.log("🚀 Server running at http://localhost:4000/graphql")
  );
}

start();
