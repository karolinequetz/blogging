export interface Post {
  id: number;
  timestamp: string;
  author: Author;
  title: string;
  subtitle: string;
  content: string;
  comments: Comment[];
}

interface Author {
  id: number;
  username: string;
}

export interface Comment {
  id: number;
  respondsTo?: { id: number } | null;
  author: Author;
  timestamp: string;
  content: string;
}

export interface ShowedComment {
  id: number;
  replies: ShowedComment[];
  author: Author;
  timestamp: string;
  content: string;
}
