export class Post {
  id: number;
  url: string;
  title: string;
  publishTime: number;
  tags: string[];
  author: string;
  authorUrl: string;
  content: string;
}

export class PostList {
  posts: Post[];
}