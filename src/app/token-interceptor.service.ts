import { Injectable } from '@angular/core';
import {HttpInterceptor, HttpRequest, HttpHandler} from '@angular/common/http';
import {AuthService} from './auth.service'

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor(private auth:AuthService) { }
  intercept(req:HttpRequest<any>,next:HttpHandler){
    let tokenizedReq = req.clone({
      setHeaders:{
        Authorization:'Bearer'+' '+this.auth.getToken()
      }
    })
    return next.handle(tokenizedReq);
  }
}
 