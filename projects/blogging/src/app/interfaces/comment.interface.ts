import { Author } from './post.interface';

export interface Comment {
  id: string;
  respondsTo?: { id: string } | null;
  author: Author;
  timestamp: string;
  content: string;
}

export interface ShowedComment {
  id: string;
  replies: ShowedComment[];
  author: Author;
  timestamp: string;
  content: string;
}
