import { Order } from "./../../../../../models/order";
import { OrderService } from "./../../../../../services/Order.service";
import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-orderitem",
  templateUrl: "./orderitem.component.html",
  styleUrls: ["./orderitem.component.css"]
})
export class OrderitemComponent implements OnInit {
  constructor(
    private orderSV: OrderService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  Orderitem = new Order();
  ngOnInit() {
    let id = this.route.snapshot.paramMap.get("id");
    this.getOrder(id);
  }
  getOrder(id) {
    this.orderSV.getOrder(id).subscribe(
      data => {
        (this.Orderitem = data.data), console.log(this.Orderitem);
      },
      err => alert(err)
    );
  }
  onSaveOrder() {
    this.orderSV.postOrder(JSON.stringify(this.Orderitem)).subscribe(
      data => {
        console.log(data.data);
        alert("OK");
        this.router.navigate(["/dashboard/orders"]);
      },
      err => alert(err)
    );
  }
}
