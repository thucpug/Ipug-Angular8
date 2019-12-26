import { ResponseData } from "./../models/response/ResponseData";
import { ProductCategory } from "./../models/ProductCategory";
import { Response } from "../models/response/response";
import { catchError, map } from "rxjs/operators";
import { Observable } from "rxjs";
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { throwError } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ProductCaregoryService {
  constructor(private http: HttpClient) {}
  headers = new HttpHeaders({ "Content-Type": "application/json" });
  getProductCategorys(
    page: number,
    limit: number
  ): Observable<Response<ProductCategory>> {
    return this.http
      .get<Response<ProductCategory>>(
        `http://103.90.225.90:8080/api/v1/product_categorys?page=${page}&limit=${limit}`
      )
      .pipe(
        catchError(err => {
          return this.errorHandler(err);
        })
      );
  }
  deleteProductCategory(id): Observable<ResponseData<ProductCategory>> {
    return this.http
      .delete<ResponseData<ProductCategory>>(
        `http://103.90.225.90:8080/api/v1/product_category/${id}`
      )
      .pipe(
        catchError(err => {
          return this.errorHandler(err);
        })
      );
  }
  postProductCategory(item: any): Observable<ResponseData<ProductCategory>> {
    return this.http
      .post<ResponseData<ProductCategory>>(
        `http://103.90.225.90:8080/api/v1/product_category`,
        item,
        { headers: this.headers }
      )
      .pipe(
        catchError(err => {
          return this.errorHandler(err);
        })
      );
  }
  getProductCategory(id: number): Observable<ResponseData<ProductCategory>> {
    return this.http
      .get<ResponseData<ProductCategory>>(
        `http://103.90.225.90:8080/api/v1/product_category/${id}`
      )
      .pipe(
        catchError(err => {
          return this.errorHandler(err);
        })
      );
  }
  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || "Server Error");
  }
}
