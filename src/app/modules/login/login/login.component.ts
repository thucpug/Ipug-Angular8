import { JwtService } from "./../../../services/auth/jwt/jwt.service";
import { AuthService } from "./../../../services/auth/auth/auth.service";
import { User } from "src/app/models/user";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
declare var $;
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  constructor(
    private router: Router,
    private auth: AuthService,
    private jwt: JwtService
  ) {}
  user = new User();
  ngOnInit() {
    $(() => {
      $("input").iCheck({
        checkboxClass: "icheckbox_square-blue",
        radioClass: "iradio_square-blue",
        increaseArea: "20%" /* optional */
      });
    });
  }
  onLogin() {
    console.log("sdfsdf");

    if (this.user) {
      if (this.user.userName.trim() == "admin") {
        this.auth.login(JSON.stringify(this.user)).subscribe(
          data => {
            this.jwt.saveJWT(data.data.accessToken);
            this.router.navigate(["dashboard"]);
          },
          err => alert("UserName or Password Wrong!")
        );
      }
    }
  }
}
