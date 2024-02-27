import { Comment } from './comment.interface';

export interface Post {
  id: string;
  timestamp: string;
  author: Author;
  title: string;
  subtitle: string;
  content: string;
  comments: Comment[];
}

export interface Author {
  id: string;
  username: string;
}
