import { UseritemComponent } from "./pages/user/useritem/useritem.component";
import { LayoutModule } from "../layout/layout.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { DashboardRoutingModule } from "./dashboard-routing.module";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProductComponent } from "./pages/product/product.component";
import { ProductitemComponent } from "./pages/product/productitem/productitem.component";
import { UserComponent } from "./pages/user/user.component";
import { OrderComponent } from "./pages/order/order.component";
import { OrderitemComponent } from "./pages/order/orderitem/orderitem.component";
import { HomeComponent } from "./pages/home/home.component";
import { ProductcategoryComponent } from "./pages/productcategory/productcategory.component";
import { ProductcategoryitemComponent } from "./pages/productcategory/productcategoryitem/productcategoryitem.component";

@NgModule({
  declarations: [
    DashboardComponent,
    ProductComponent,
    ProductitemComponent,
    UserComponent,
    OrderComponent,
    OrderitemComponent,
    HomeComponent,
    ProductcategoryComponent,
    ProductcategoryitemComponent,
    UseritemComponent
  ],
  imports: [CommonModule, DashboardRoutingModule, LayoutModule, FormsModule]
})
export class DashboardModule {}
