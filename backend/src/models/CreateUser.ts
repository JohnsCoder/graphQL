export type Args = {
  name: string;
  email: string;
};

export type CreateUser = (args: Args, ctx: object) => object;
