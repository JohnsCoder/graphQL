import { User } from "../../models/User";
import crypto from "crypto";

export class UserResolver {
  private data: User[] = [];

  async users() {
    return this.data;
  }

  async createUser(user: User) {
    this.data.push(user);

    return this.data;
  }
}
