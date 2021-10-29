export interface Submission {
  id: number;
  title: string;
  text: string;
  username: string;
  created_at: string;
}

export interface User {
  username: string,
  id: number,
  description: string,
  created_at: string
}