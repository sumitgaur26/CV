export interface Post {
  title: string;
  excerpt: string;
  url: string;
  date: string;
  readingTime: string;
  tags: string[];
}

// No published articles yet. Add real posts here (title, excerpt, url,
// date, readingTime, tags). The Writing section renders an empty state
// until this has entries; nothing here is placeholder/fake content.
export const posts: Post[] = [];
