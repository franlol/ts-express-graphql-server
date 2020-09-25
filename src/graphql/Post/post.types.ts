export type TPost = {
  title: string;
  body: string;
  by_user: string;
}

export type TPostResolver = {
  getPosts: () => TPost[];
  getPostByUser: ({ username }: { username: string; }) => Array<TPost> | undefined;

  addPost: ({ title, body, by_user }: TPost) => TPost;
}
