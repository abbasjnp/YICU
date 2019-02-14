import { Injectable, } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class Service {
  public resData;
    private httpOptions ={
      headers : new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':'Bearer JUYeo2IXPjw0BSLj1MHmuokMV4JRG9'
      })
    }
  
    private _base = 'http://192.168.1.28:8001/api/';

  constructor(private http :HttpClient) { 
    
  }

  getRecentUsers(){
    return this.http.get((this._base+'dashboard/'),this.httpOptions)
    
  }

  addSport(formData){
        const httpOption={
          headers : new HttpHeaders({            
            'Authorization':'Bearer JUYeo2IXPjw0BSLj1MHmuokMV4JRG9',
            'Accept': 'application/json' 
          })
        }
        return this.http.post((this._base+'sport/'),formData,httpOption);
  }

  getSport(){
    return this.http.get(this._base+'sport/',this.httpOptions);
  }

  deleteSport(id:number){
    console.log(this._base+'delsport/'+id);
    return this.http.delete(this._base+'sport/'+id+'/',this.httpOptions);
  }

  getSession(){
    return this.http.get(this._base+'session/',this.httpOptions)
  }

  getBusiness(){
    return this.http.get(this._base+'business/',this.httpOptions);
  }
}

// 'http://cors-anywhere.herokuapp.com/'+ 