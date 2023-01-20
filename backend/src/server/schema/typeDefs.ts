import { gql } from "apollo-server";

const typeDefs = gql`
  type obj {
    key1: String!
  }

  type users {
    id: String!
    name: String!
    email: String!
  }

  type Query {
    users: [users!]!
    test: obj
  }

  type test {
    id: String
    name: String
  }

  type Mutation {
    createUser(name: String!, email: String!): users
    # createUser(name: String!): String!
  }
`;
export default typeDefs