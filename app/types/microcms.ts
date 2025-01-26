export type Blog = {
  id: string;
  title: string;
  content: string;
  publishedAt: string;
  updatedAt: string;
  category: Category;
  createdAt: string;
  eyecatch: MicroCMSImage;
}

export type MicroCMSImage = {
  url: string;
  height: number;
  width: number;
}

export type Category = {
  id: string;
  name: string;
}