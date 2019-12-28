import { AuthGuard } from "./modules/login/auth.guard";
import { AuthService } from "./services/auth/auth/auth.service";
import { JwtService } from "./services/auth/jwt/jwt.service";
import { OrderService } from "./services/Order.service";
import { FileService } from "./services/File.service";
import { ProductCaregoryService } from "./services/ProductCaregory.service";
import { DashboardComponent } from "./modules/dashboard/dashboard/dashboard.component";
import { ProductService } from "./services/ProductService";
import { DashboardModule } from "./modules/dashboard/dashboard.module";
import { FormsModule } from "@angular/forms";
import { LoginModule } from "./modules/login/login.module";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { Page403Component } from "./modules/page403/page403.component";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { TokenInterceptor } from './services/auth/jwt/Token.interceptor';

@NgModule({
  declarations: [AppComponent, Page403Component],
  imports: [
    BrowserModule,
    LoginModule,
    FormsModule,
    DashboardModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    ProductService,
    ProductCaregoryService,
    FileService,
    OrderService,
    JwtService,
    AuthService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
