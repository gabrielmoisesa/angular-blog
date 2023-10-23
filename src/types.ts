export type ContentItem = {
  type: 'heading' | 'paragraph';
  text: string;
  format?: 'italic';
}

export type PostType = {
  img: string;
  date: string;
  title: string;
  color?: string;
  content?: ContentItem[];
}