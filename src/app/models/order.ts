import { base } from "./base";
import { orderDetail } from "./orderDetail";
export class Order implements base {
  id: number;
  name: string;
  description: string;
  createBy: string;
  status: boolean;
  address: string;
  email: string;
  mobile: string;
  message: string;
  paymentMethod: string;
  createDate: Date;
  products: orderDetail[];
}
