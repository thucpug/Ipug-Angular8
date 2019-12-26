import { Order } from "./../models/order";
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
import { throwError } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class OrderService {
  constructor(private http: HttpClient) {}
  headers = new HttpHeaders({ "Content-Type": "application/json" });

  getOrders(page: number, limit: number): Observable<Response<Order>> {
    return this.http
      .get<Response<Order>>(
        `http://103.90.225.90:8080/api/v1/orders?page=${page}&limit=${limit}`
      )
      .pipe(
        catchError(err => {
          return this.errorHandler(err);
        })
      );
  }
  deleteOrder(id): Observable<ResponseData<Order>> {
    return this.http
      .delete<ResponseData<Order>>(
        `http://103.90.225.90:8080/api/v1/order/${id}`
      )
      .pipe(
        catchError(err => {
          return this.errorHandler(err);
        })
      );
  }
  getOrder(id): Observable<ResponseData<Order>> {
    return this.http
      .get<ResponseData<Order>>(`http://103.90.225.90:8080/api/v1/order/${id}`)
      .pipe(
        catchError(err => {
          return this.errorHandler(err);
        })
      );
  }
  postOrder(item: any): Observable<ResponseData<Order>> {
    return this.http
      .post<ResponseData<Order>>(
        `http://103.90.225.90:8080/api/v1/order`,
        item,
        { headers: this.headers }
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
