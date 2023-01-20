import path from "path";
import { ApolloServer, gql } from "apollo-server";
import { UserResolver } from "./src/server/resolvers/UserResolver";
import typeDefs from "./src/server/schema/typeDefs";
import resolvers from "./src/server/resolvers/resolver";
// import crypt from "crypto";

// query: buscar dados
// mutation: criar, alterar ou excluir

async function main() {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await server
    .listen()
    .then(({ url }) => console.log(`Server running on ${url} `));
}

main();
