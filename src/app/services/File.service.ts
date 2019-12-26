import { FileUpload } from "./../models/response/fileUpload";
import { Order } from "./../models/order";
import { Response } from "../models/response/response";
import { catchError, map } from "rxjs/operators";
import { Observable } from "rxjs";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { throwError } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class FileService {
  constructor(private http: HttpClient) {}

  postImages(file: any): Observable<FileUpload> {
    return this.http
      .post<FileUpload>(`http://103.90.225.90:8080/api/v1/uploadFile`, file)
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
