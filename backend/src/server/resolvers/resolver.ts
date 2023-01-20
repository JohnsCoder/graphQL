import { UserResolver } from "./UserResolver";
import { Args } from "../../models/CreateUser";
import crypt from "crypto";

const user = new UserResolver();

const resolvers = {
  Query: {
    users() {
      return user.users();
    },

    test() {
      return { key1: "test" };
    },
  },
  Mutation: {
    createUser: async (parent: undefined, args: Args, ctx: object) => {
      user.createUser({
        id: crypt.randomUUID() + "",
        name: args.name,
        email: args.email,
      });
      return {
        id: crypt.randomUUID() + "",
        name: args.name,
        email: args.email,
      };
    },
  },
};

export default resolvers;
