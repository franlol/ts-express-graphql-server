export type TUser = {
  username: string;
  password: string;
  token?: string;
}

export type TUserResolver = {
  getUser: ({ username }: { username: string }) => TUser | undefined;
  getAllUsers: () => Array<TUser> | undefined;

  addUser: ({ username, password }: TUser) => TUser;
}
