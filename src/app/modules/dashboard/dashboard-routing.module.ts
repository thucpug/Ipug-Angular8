import { UseritemComponent } from "./pages/user/useritem/useritem.component";
import { UserComponent } from "./../../modules/dashboard/pages/user/user.component";
import { OrderitemComponent } from "./../../modules/dashboard/pages/order/orderitem/orderitem.component";
import { OrderComponent } from "./../../modules/dashboard/pages/order/order.component";

import { ProductcategoryitemComponent } from "./pages/productcategory/productcategoryitem/productcategoryitem.component";
import { ProductcategoryComponent } from "./pages/productcategory/productcategory.component";
import { ProductitemComponent } from "./pages/product/productitem/productitem.component";
import { HomeComponent } from "./pages/home/home.component";
import { ProductComponent } from "./pages/product/product.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "dashboard",
    component: DashboardComponent,
    children: [
      { path: "", component: HomeComponent },
      {
        path: "productcategorys",
        children: [
          { path: "", component: ProductcategoryComponent },
          { path: "add", component: ProductcategoryitemComponent },
          { path: "edit/:id", component: ProductcategoryitemComponent }
        ]
      },
      {
        path: "products",
        children: [
          { path: "", component: ProductComponent },
          { path: "add", component: ProductitemComponent },
          { path: "edit/:id", component: ProductitemComponent }
        ]
      },
      {
        path: "orders",
        children: [
          { path: "", component: OrderComponent },
          { path: "add", component: OrderitemComponent },
          { path: "edit/:id", component: OrderitemComponent }
        ]
      },
      {
        path: "users",
        children: [
          { path: "", component: UserComponent },
          { path: "add", component: UseritemComponent },
          { path: "edit/:id", component: UseritemComponent }
        ]
      }
    ]
  },
  { path: "dashboard/products/add", component: ProductitemComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
