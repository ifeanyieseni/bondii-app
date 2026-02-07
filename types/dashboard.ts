export interface Profile {
  id: number | string;
  name: string;
  age: number;
  image: string;
  location: string;
  badges: string[];
  matchPercentage: number;
  bio?: string;
  interests?: string[];
  distance?: number;
}

export interface ChatMessage {
  id: string;
  text: string;
  sender: 'me' | 'them';
  timestamp: string;
}

export interface ChatSession {
  id: string;
  name: string;
  image: string;
  lastMessage: string;
  time: string;
  unreadCount: number;
  status: 'online' | 'offline';
  messages?: ChatMessage[];
}
