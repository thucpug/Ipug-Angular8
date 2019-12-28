import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/auth/auth/auth.service";
declare var $;
@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"]
})
export class UserComponent implements OnInit {
  constructor(private authSV: AuthService, private router: Router) {}
  users = [];
  ngOnInit() {
    this.getUsers();
    setTimeout(function() {
      $(() => {
        $("#example1").DataTable({});
      });
    }, 400);
  }
  getUsers() {
    this.authSV.getUsers(1, 100).subscribe(
      data => (this.users = data.data.listResult),
      err => alert(err)
    );
  }
  onRemove(id, name) {
    if (window.confirm(`Are sure you want to delete ${name} ?`)) {
      let index = this.findIndex(id);
      this.authSV.deleteUser(id).subscribe(
        data => {
          this.users.splice(index, 1);
        },
        err => {
          alert(err);
        }
      );
    }
  }
  onSelect(id) {
    console.log("onSelect", id);
    this.router.navigate([`/dashboard/users/edit`, id]);
  }
  findIndex(id: number) {
    for (let index = 0; index < this.users.length; index++) {
      const element = this.users[index];
      if (element.id == id) {
        return index;
      }
    }
  }
}
