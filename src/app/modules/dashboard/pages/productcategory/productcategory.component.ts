import { ProductCaregoryService } from "./../../../../services/ProductCaregory.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
declare var $;
@Component({
  selector: "app-productcategory",
  templateUrl: "./productcategory.component.html",
  styleUrls: ["./productcategory.component.css"]
})
export class ProductcategoryComponent implements OnInit {
  constructor(
    private productCtSV: ProductCaregoryService,
    private router: Router
  ) {}
  productCategories = [];
  msgErr = "";
  response = {};
  ngOnInit() {
    this.getProductCategories();
    setTimeout(function() {
      $(() => {
        $("#tableProductCategory").DataTable({});
      });
    }, 250);
  }
  getProductCategories() {
    this.productCtSV.getProductCategorys(1, 100).subscribe(
      data => (this.productCategories = data.data.listResult),
      err => (this.msgErr = err)
    );
  }
  onRemove(id, name) {
    if (window.confirm(`Are sure you want to delete ${name} ?`)) {
      let index = this.findIndex(id);
      this.productCtSV.deleteProductCategory(id).subscribe(
        data => {
          (this.response = data.data), this.productCategories.splice(index, 1);
        },
        err => {
          (this.msgErr = err), alert(err);
        }
      );
    }
  }
  onSelect(id) {
    this.router.navigate([`/dashboard/productcategorys/edit`, id]);
  }
  findIndex(id: number) {
    for (let index = 0; index < this.productCategories.length; index++) {
      const element = this.productCategories[index];
      if (element.id == id) {
        return index;
      }
    }
  }
}
