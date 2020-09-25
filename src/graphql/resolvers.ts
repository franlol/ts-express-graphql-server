import postResolver from './Post/postResolver';
import userResolver from './User/userResolver';

import { TPostResolver } from './Post/post.types';
import { TUserResolver } from './User/User.types';

const resolvers: TPostResolver & TUserResolver = {
  ...postResolver,
  ...userResolver
}

export default resolvers;
