import { Role } from "./role";
export class User {
  id: number;
  userName: string;
  password: string;
  avatar: string;
  email: string;
  mobile: string;
  address: string;
  status: boolean;
  roles: Role[];
}
