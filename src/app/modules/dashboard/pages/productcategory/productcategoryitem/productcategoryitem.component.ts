import { ProductCaregoryService } from "./../../../../../services/ProductCaregory.service";
import { ProductCategory } from "./../../../../../models/ProductCategory";
import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-productcategoryitem",
  templateUrl: "./productcategoryitem.component.html",
  styleUrls: ["./productcategoryitem.component.css"]
})
export class ProductcategoryitemComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productCtSV: ProductCaregoryService
  ) {}
  productcategory = new ProductCategory();
  ngOnInit() {
    let id = this.route.snapshot.paramMap.get("id");
    this.getProductCategory(id);
  }
  getProductCategory(id) {
    this.productCtSV.getProductCategory(id).subscribe(
      data => (this.productcategory = data.data),
      err => alert("Error Sever or Path!")
    );
  }
  onSaveProductCategory() {
    if (this.productcategory.id) {
      this.productCtSV
        .postProductCategory(JSON.stringify(this.productcategory))
        .subscribe(
          data => {
            console.log(data);
            alert("Success!");
            this.router.navigate(["/dashboard/productcategorys"]);
          },
          err => {
            alert(err);
          }
        );
    } else {
      console.log(JSON.stringify(this.productcategory));
      this.productCtSV
        .postProductCategory(JSON.stringify(this.productcategory))
        .subscribe(
          data => {
            console.log(data);
            alert("Success!");
            this.router.navigate(["/dashboard/productcategorys"]);
          },
          err => {
            alert(err);
          }
        );
    }
  }
}
