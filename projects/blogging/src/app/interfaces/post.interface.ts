import { Comment } from './comment.interface';

export interface Post {
  id: string;
  timestamp: string;
  author: Author;
  title: string;
  subtitle: string;
  content: string;
}

export interface Author {
  id: string;
  username: string;
}

export interface PostWithComments extends Post {
  comments: Comment[];
}
