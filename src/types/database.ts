export interface Trend {
  id: number;
  title: string;
  description: string;
  content: string;
  emoji: string;
  badge: string;
  date: string;
  tags: string;
  category: string;
  image: string;
  views: number;
  is_published: boolean;
  sort_order: number;
  created_at: string;
}

export interface BlogPost {
  id: number;
  title: string;
  description: string;
  content: string;
  emoji: string;
  category: string;
  category_class: string;
  author: string;
  read_time: string;
  image: string;
  date: string;
  tags: string;
  views: number;
  likes: number;
  is_published: boolean;
  sort_order: number;
  created_at: string;
}

export interface Database {
  public: {
    Tables: {
      trends: {
        Row: Trend;
        Insert: Omit<Trend, 'id' | 'created_at'>;
        Update: Partial<Omit<Trend, 'id' | 'created_at'>>;
      };
      blog_posts: {
        Row: BlogPost;
        Insert: Omit<BlogPost, 'id' | 'created_at'>;
        Update: Partial<Omit<BlogPost, 'id' | 'created_at'>>;
      };
    };
  };
}
