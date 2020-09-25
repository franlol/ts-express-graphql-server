import { TUser, TUserResolver } from "./User.types";

var users: Array<TUser> = [];

const userResolver: TUserResolver = {
  getUser: ({ username }: { username: string }) => users.find((user: TUser) => user.username === username),
  getAllUsers: () => users,

  addUser: ({ username, password }: TUser) => {
    const newUser: TUser = { username, password, token: '' }
    users.push(newUser);

    return newUser;
  }
}

export default userResolver;
