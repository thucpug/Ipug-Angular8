import { Response } from "../../../../models/response/response";
import { ProductService } from "../../../../services/ProductService";
import { Component, OnInit } from "@angular/core";
import { product } from "src/app/models/product";
import { windowCount } from "rxjs/operators";
import { Router } from "@angular/router";
declare var $;
@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"]
})
export class ProductComponent implements OnInit {
  constructor(private _productSV: ProductService, private router: Router) {}
  products = [];
  msgErr = "";
  response = {};
  page = 1;
  limit = 100;
  ngOnInit() {
    this.onGetProducts();
    setTimeout(function() {
      $(() => {
        $("#example1").DataTable({});
      });
    }, 400);
  }
  onGetProducts() {
    this._productSV.getProducts(this.page, this.limit).subscribe(
      data => (this.products = data.data.listResult),
      err => (this.msgErr = err)
    );
  }
  onRemove(id, name) {
    if (window.confirm(`Are sure you want to delete ${name} ?`)) {
      let index = this.findIndex(id);
      this._productSV.deleteProduct(id).subscribe(
        data => {
          this.response = data;
          this.products.splice(index, 1);
        },
        err => {
          this.msgErr = err;
          alert(err);
        }
      );
    }
  }
  onSelect(id) {
    console.log("onSelect", id);
    this.router.navigate([`/dashboard/products/edit`, id]);
  }
  findIndex(id: number) {
    for (let index = 0; index < this.products.length; index++) {
      const element = this.products[index];
      if (element.id == id) {
        return index;
      }
    }
  }
}
