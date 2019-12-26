import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
declare var $;
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) {}

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
    this.router.navigate(["dashboard"]);
  }
}
