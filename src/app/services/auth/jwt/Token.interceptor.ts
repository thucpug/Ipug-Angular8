import { JwtService } from "./jwt.service";
import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  public static currentTeamId: any;
  constructor(public jwt: JwtService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let requestOption: any = {};
    if (this.jwt.getJWT()) {
      requestOption.setHeaders = {
        Authorization: `${this.jwt.getJWT()}`,
        "Content-Type": "application/json"
      };
    }
    request = request.clone(requestOption);
    return next.handle(request);
  }
}
