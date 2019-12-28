import { Router } from "@angular/router";
import { Injectable } from "@angular/core";
import * as jwt_decode from "jwt-decode";
@Injectable({
  providedIn: "root"
})
export class JwtService {
  constructor(private router: Router) {}
  getJWT(): string {
    return window.localStorage.getItem("accessToken");
  }
  saveJWT(accessToken: string) {
    window.localStorage.setItem("accessToken", "Bearer " + accessToken);
  }
  destroyJWT() {
    window.localStorage.removeItem("accessToken");
    this.router.navigate(["/login"]);
  }
  getUserNameIsLogined() {
    if (this.getJWT()) {
      let tokenInfor = jwt_decode(this.getJWT());
      return tokenInfor.sub;
    }
  }
}
