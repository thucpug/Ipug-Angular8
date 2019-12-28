import { base } from "./base";
export class ProductCategory implements base {
  id: number;
  name: string;
  description: string;
  avatar: string;
  createBy: string = "admin";
  status: boolean = true;
}
