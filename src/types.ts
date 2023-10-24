export type ContentItem = {
  type: 'heading' | 'paragraph' | 'image';
  text?: string;
  format?: 'italic';
  img?: string;
}

export type PostType = {
  img: string;
  date: string;
  title: string;
  color?: string;
  content?: ContentItem[];
}