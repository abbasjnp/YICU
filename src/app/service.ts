import { Injectable, } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { TokenInterceptorService } from './token-interceptor.service';
import{throwError, of, Observable} from 'rxjs'
import{catchError,retry} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class Service {
  public resData;
  public loginStatus;
  httpOptions;
  public users;

  private _base = 'http://192.168.1.28:8001/api/';

  constructor(private http: HttpClient, private ts: TokenInterceptorService) {
   //  console.log(this.getUserDetail(),"pppppppppp")
    // this.httpOptions ={
    //   headers : new HttpHeaders({
    //     'Content-Type':'application/json',

    //     'Authorization':'Bearer '+localStorage.getItem('token')
    //   })
    // }



  }

  getRecentUsers() {
    return this.http.get((this._base + 'dashboard/'))

  }

  addSport(formData) {
    // const httpOptions={
    //   headers:new HttpHeaders({
    //     'Authorization':'Bearer'+' '+localStorage.getItem('token'),
    //     'Accept':'application/json'
    //   })
    // }
    const req = new HttpRequest('POST', this._base + 'sport/', formData, {
      reportProgress: true
    })
    req.headers.append("Content-Type", "multipart/form-data");
    return this.http.request(req);

    //    req.headers.append("Accept","application/json");   
    //return this.http.post((this._base+'sport/'),formData);

  }

  getSport() {
    return this.http.get(this._base + 'sport/');
  }



  deleteSport(id: number) {

    return this.http.delete(this._base + 'sport/' + id + '/');
  }

  getSession() {
    return this.http.get(this._base + 'session/')
  }

  getBusiness() {
    return this.http.get(this._base + 'business/');
  }

  getUser() {
    return this.http.get(this._base + 'register/');
  }

  loginUser(requestData) {
    return this.http.post(this._base + 'login/', requestData)
                                .pipe(
                                  retry(2),
                                  catchError(this.handleError)
                                );
  }

      getLoggedIn(value: boolean) {
         this.loginStatus = value;
      }

      get isLoggedIn() {
        return this.loginStatus;
        console.log(this.loginStatus);
       }

  


  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }
}

//  'http://cors-anywhere.herokuapp.com/'+