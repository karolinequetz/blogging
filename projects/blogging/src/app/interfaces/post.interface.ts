export interface Post {
  id: number;
  timestamp: Date;
  author: Author;
  title: string;
  subtitle: string;
  content: string;
  comments: Comments[];
}

interface Author {
  id: number;
  username: string;
}

interface Comments {
  id: number;
  respondsTo?: string;
  author: Author;
  timestamp: Date;
  content: string;
}
