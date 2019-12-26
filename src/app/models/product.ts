import { ProductCategory } from "./ProductCategory";
import { base } from "./base";
export class product implements base {
  constructor() {}

  id: number;
  name: string;
  description: string;
  createBy: string = "admin";
  status: boolean = true;
  image: string;
  price: number;
  promotionPrice: number;
  warranty: number;
  hotFlag: boolean = false;
  productcategory: ProductCategory ;
  data: any;
}
