import { Router } from "@angular/router";
import { Order } from "./../../../../models/order";
import { OrderService } from "./../../../../services/Order.service";
import { Component, OnInit } from "@angular/core";
declare var $;
@Component({
  selector: "app-order",
  templateUrl: "./order.component.html",
  styleUrls: ["./order.component.css"]
})
export class OrderComponent implements OnInit {
  constructor(private orderSV: OrderService, private router: Router) {}
  ngOnInit() {
    this.getOrders();
    setTimeout(function() {
      $(() => {
        $("#example1").DataTable({});
      });
    }, 400);
  }
  Orders: Order[] = [];
  getOrders() {
    this.orderSV.getOrders(1, 100).subscribe(
      data => {
        this.Orders = data.data.listResult;
      },
      err => alert(err)
    );
  }
  onRemove(id, name) {
    if (window.confirm(`Are sure you want to delete ${name} ?`)) {
      let index = this.findIndex(id);
      this.orderSV.deleteOrder(id).subscribe(
        data => {
          this.Orders.splice(index, 1);
        },
        err => {
          alert(err);
        }
      );
    }
  }
  onSelect(id) {
    this.router.navigate([`/dashboard/orders/edit`, id]);
  }
  findIndex(id: number) {
    for (let index = 0; index < this.Orders.length; index++) {
      const element = this.Orders[index];
      if (element.id == id) {
        return index;
      }
    }
  }
}
