export interface City {
  id: string;
  name: string;
  cnName: string;
  description: string;
  image: string;
}

export interface Post {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  user: {
    name: string;
    avatar: string;
  };
  likes: number;
  isVideo?: boolean;
}

export interface Review {
  id: string;
  user: string;
  avatar: string;
  rating: number;
  date: string;
  content: string;
}

export interface TicketType {
  id: string;
  name: string;
  desc: string;
  price: number;
  tag?: string;
  count: number;
}