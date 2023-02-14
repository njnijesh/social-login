export interface User {
  name?: string;
  id?: number;
  email?: string;
  loggedInBy?: string;
}
export interface UserContextProps {
  user: User;
  setUser: (userData: User) => void;
}

export interface Props {
  children: React.ReactNode;
}
