import { TPost, TPostResolver } from "./post.types";

var posts: Array<TPost> = []

const postResolver: TPostResolver = {
  getPosts: () => posts,
  getPostByUser: ({ username }: { username: string }) => posts.filter((post: TPost) => post.by_user === username),

  addPost: ({ title, body, by_user }: TPost) => {
    const post: TPost = { title, body, by_user };
    posts.push(post);

    return post;
  }
}

export default postResolver;
