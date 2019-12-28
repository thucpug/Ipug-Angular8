import { Response } from "./../../../models/response/response";
import { Login } from "./../../../models/response/login";
import { JwtService } from "./../jwt/jwt.service";
import { ResponseData } from "./../../../models/response/ResponseData";
import { catchError, map } from "rxjs/operators";
import { Observable } from "rxjs";
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { throwError } from "rxjs";
import { User } from "src/app/models/user";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(private http: HttpClient, private jwt: JwtService) {}
  headers = new HttpHeaders({ "Content-Type": "application/json" });
  login(user): Observable<ResponseData<Login>> {
    return this.http
      .post<ResponseData<Login>>(
        `http://103.90.225.90:8080/api/v1/auth/login`,
        user,
        { headers: this.headers }
      )
      .pipe(
        catchError(err => {
          return this.errorHandler(err);
        })
      );
  }
  isLoggedIn() {
    return this.jwt.getJWT() !== null;
  }
  register(user:any): Observable<ResponseData<User>> {
    return this.http
      .post<ResponseData<User>>(
        `http://103.90.225.90:8080/api/v1/auth/register`,
        user,
        { headers: this.headers }
      )
      .pipe(
        catchError(err => {
          return this.errorHandler(err);
        })
      );
  }
  getUsers(page: number, limit: number): Observable<Response<User>> {
    return this.http
      .get<Response<User>>(
        `http://103.90.225.90:8080/api/v1/auth/users?page=${page}&limit=${limit}`
      )
      .pipe(
        catchError(err => {
          return this.errorHandler(err);
        })
      );
  }
  postUser(item: any): Observable<ResponseData<User>> {
    return this.http
      .post<ResponseData<User>>(
        `http://103.90.225.90:8080/api/v1/auth/register`,
        item,
        { headers: this.headers }
      )
      .pipe(
        catchError(err => {
          return this.errorHandler(err);
        })
      );
  }
  getUser(id): Observable<ResponseData<User>> {
    return this.http
      .get<ResponseData<User>>(
        `http://103.90.225.90:8080/api/v1/auth/user/${id}`
      )
      .pipe(
        catchError(err => {
          return this.errorHandler(err);
        })
      );
  }
  deleteUser(id): Observable<ResponseData<User>> {
    return this.http
      .delete<ResponseData<User>>(
        `http://103.90.225.90:8080/api/v1/auth/user/${id}`
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
