import { Router, ActivatedRoute } from "@angular/router";
import { ProductService } from "../../../../../services/ProductService";
import { FileService } from "../../../../../services/File.service";
import { product } from "../../../../../models/product";
import { ProductCaregoryService } from "../../../../../services/ProductCaregory.service";
import { Component, OnInit } from "@angular/core";
import { ProductCategory } from "src/app/models/ProductCategory";

@Component({
  selector: "app-productitem",
  templateUrl: "./productitem.component.html",
  styleUrls: ["./productitem.component.css"]
})
export class ProductitemComponent implements OnInit {
  constructor(
    private productCtgrSV: ProductCaregoryService,
    private fileSV: FileService,
    private productSV: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  product = new product();
  productCategorys = [];
  response = {};
  msgErr = "";
  fileData: File = null;
  previewUrl: any = null;
  fileUploadProgress: string = null;
  uploadedFilePath: string = null;
  ngOnInit() {
    let id = this.route.snapshot.paramMap.get("id");
    this.getProductItemEdit(id);
    this.getProductCategorys();
  }

  getProductItemEdit(id) {
    this.productSV.getProduct(id).subscribe(data => {
      this.product = data.data;
    });
  }
  getProductCategorys() {
    this.productCtgrSV.getProductCategorys(1, 100).subscribe(
      data => (this.productCategorys = data.data.listResult),
      err => (this.msgErr = err)
    );
  }
  fileProgress(fileInput: any) {
    this.fileData = <File>fileInput.target.files[0];
    this.preview();
  }
  preview() {
    // Show preview
    var mimeType = this.fileData.type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }
    var reader = new FileReader();
    reader.readAsDataURL(this.fileData);
    reader.onload = _event => {
      this.previewUrl = reader.result;
    };
  }
  onPostImage() {
    const formData = new FormData();
    formData.append("file", this.fileData);
    this.fileSV.postImages(formData).subscribe(res => {
      this.uploadedFilePath = res.fileDownloadUri;
      this.product.image = this.uploadedFilePath;
    });
  }
  onSaveProduct() {
    if (this.product.id) {
      this.productSV.postProduct(JSON.stringify(this.product)).subscribe(
        data => {
          this.response = data;
          alert("Success!");
          this.router.navigate(["/dashboard/products"]);
        },
        err => {
          this.msgErr = err;
          alert("Error!" + err);
        }
      );
    } else {
      console.log("else");

      let idx = this.product.productcategory.toString();
      let productCategoryTemp = new ProductCategory();
      productCategoryTemp.id = Number(idx);
      this.product.productcategory = productCategoryTemp;
      this.productSV.postProduct(JSON.stringify(this.product)).subscribe(
        data => {
          this.response = data;
          alert("Success!!!!!");
          this.router.navigate(["/dashboard/products"]);
        },
        err => {
          this.msgErr = err;
          alert("Error!" + err);
        }
      );
    }
  }
}
