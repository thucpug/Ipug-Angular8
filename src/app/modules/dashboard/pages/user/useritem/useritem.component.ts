import { User } from "./../../../../../models/user";
import { AuthService } from "./../../../../../services/auth/auth/auth.service";
import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-useritem",
  templateUrl: "./useritem.component.html",
  styleUrls: ["./useritem.component.css"]
})
export class UseritemComponent implements OnInit {
  constructor(
    private authSV: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  User = new User();
  ngOnInit() {
    let id = this.route.snapshot.paramMap.get("id");
    console.log(id);

    this.getUser(id);
  }
  getUser(id) {
    this.authSV.getUser(id).subscribe(
      data => {
        this.User = data.data;
      },
      err => alert(err)
    );
  }
  onSave() {
    this.authSV.register(JSON.stringify(this.User)).subscribe(
      data => {
        alert("Success!"), this.router.navigate(["/dashboard/users"]);
      },
      err => alert("Fail")
    );
  }
}
