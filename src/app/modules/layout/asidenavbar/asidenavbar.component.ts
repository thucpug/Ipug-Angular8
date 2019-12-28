import { JwtService } from "./../../../services/auth/jwt/jwt.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-asidenavbar",
  templateUrl: "./asidenavbar.component.html",
  styleUrls: ["./asidenavbar.component.css"]
})
export class AsidenavbarComponent implements OnInit {
  constructor(private jwt: JwtService) {}
  userName = "";
  ngOnInit() {
    this.userName = this.jwt.getUserNameIsLogined();
  }
}
