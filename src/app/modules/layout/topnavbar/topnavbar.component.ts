import { JwtService } from "./../../../services/auth/jwt/jwt.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-topnavbar",
  templateUrl: "./topnavbar.component.html",
  styleUrls: ["./topnavbar.component.css"]
})
export class TopnavbarComponent implements OnInit {
  constructor(private jwt: JwtService) {}
  nameUser = "";
  ngOnInit() {
    this.nameUser = this.jwt.getUserNameIsLogined();
  }

  onSignOut() {
    this.jwt.destroyJWT();
  }
}
