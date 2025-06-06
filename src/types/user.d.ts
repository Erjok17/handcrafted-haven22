export interface User {
  id: string;
  email: string;
  name: string;
  role: 'customer' | 'seller' | 'admin';
  avatarUrl?: string;
  createdAt: Date;
}

export interface AuthUser extends Pick<User, 'id' | 'email' | 'name' | 'role'> {
  token: string;
}