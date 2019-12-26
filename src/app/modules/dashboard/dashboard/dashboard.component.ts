import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  constructor() {}
  switchComponents = "home";
  ngOnInit() {
    window.dispatchEvent(new Event("resize"));
  }
}
