import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router' ;
import {Service} from './../service'

@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.css']
})
export class SessionsComponent implements OnInit {
  public userData;
  constructor(
              private router:Router,
              private service:Service) 
              { }

  ngOnInit() {
    this.getSessionDetail()
  }
  // openDetails(){
  //   this.router.navigate(['/session-details'])
  // }
  getSessionDetail(){
        this.service.getSession()
                              .subscribe((res:any)=>{
                                this.userData=res.data;
                               
                              })

  }
}
