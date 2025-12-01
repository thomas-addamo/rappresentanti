export interface Representative {
  id: number;
  name: string;
  role: string;
  description: string;
  image: string;
  instaHandle: string;
}

export interface Goal {
  id: number;
  title: string;
  description: string;
  status: 'achieved' | 'in-progress' | 'locked';
  icon: string;
}

export interface NewsItem {
  id: number;
  date: string;
  category: string;
  title: string;
  excerpt: string;
  content: string; // HTML content or long text
  author?: string;
  featured?: boolean;
}