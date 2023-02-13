export interface User {
  name?: string;
  id?: number;
  email?: string;
  loggedInBy?: string;
}
export interface UserContextProps {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
}

export interface Props {
  children: React.ReactNode;
}
