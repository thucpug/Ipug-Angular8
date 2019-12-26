import { ResponseData } from "./../models/response/ResponseData";
import { Response } from "../models/response/response";
import { catchError, map } from "rxjs/operators";
import { Observable } from "rxjs";
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { product } from "src/app/models/product";
import { throwError } from "rxjs";
@Injectable({
  providedIn: "root"
})
export class ProductService {
  constructor(private http: HttpClient) {}
  headers = new HttpHeaders({ "Content-Type": "application/json" });
  getProducts(page: number, limit: number): Observable<Response<product>> {
    return this.http
      .get<Response<product>>(
        `http://103.90.225.90:8080/api/v1/products?page=${page}&limit=${limit}`
      )
      .pipe(
        // map(res => {
        //   console.log(res);
        //   return res;
        // }),
        catchError(err => {
          return this.errorHandler(err);
        })
      );
  }

  getProduct(id: number): Observable<ResponseData<product>> {
    console.log("get product item");
    return this.http
      .get<ResponseData<product>>(
        `http://103.90.225.90:8080/api/v1/product/${id}`
      )
      .pipe(
        catchError(err => {
          return this.errorHandler(err);
        })
      );
  }
  deleteProduct(id: number): Observable<product> {
    return this.http
      .delete<product>(`http://103.90.225.90:8080/api/v1/product/${id}`)
      .pipe(
        catchError(err => {
          return this.errorHandler(err);
        })
      );
  }
  postProduct(item: any): Observable<product> {
    return this.http
      .post<product>(`http://103.90.225.90:8080/api/v1/product`, item, {
        headers: this.headers
      })
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
