import { Post } from './post.interface';

export interface User {
  id: string;
  username: string;
  memberSince: string;
  friendIds: number[];
  posts: Post[];
}
