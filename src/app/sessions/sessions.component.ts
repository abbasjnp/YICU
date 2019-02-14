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

  // usertabData: any = [
  //   { name: 'New User', id: 'Abc Vats', email: 'abc@gmail.com', url: 'assets/img/layer.jpg' },
  //   { name: 'New User', id: 'Abc Vats', email: 'abc@gmail.com', url: 'assets/img/notification.jpg' },
  //   { name: 'New User', id: 'Abc Vats', email: 'abc@gmail.com', url: 'assets/img/notification.jpg' },
  //   { name: 'New User', id: 'Abc Vats', email: 'abc@gmail.com', url: 'assets/img/notification.jpg' },
  //   { name: 'New User', id: 'Abc Vats', email: 'abc@gmail.com', url: 'assets/img/notification.jpg' },
  //   { name: 'New User', id: 'Abc Vats', email: 'abc@gmail.com', url: 'assets/img/notification.jpg' },
  //   { name: 'New User', id: 'Abc Vats', email: 'abc@gmail.com', url: 'assets/img/notification.jpg' },
   
  // ];
  constructor(
              private router:Router,
              private service:Service) 
              { }

  ngOnInit() {
    this.getSessionDetail()
  }
  openDetails(){
    this.router.navigate(['/session-details'])
  }
  getSessionDetail(){
        this.service.getSession()
                              .subscribe(res=>{
                                this.userData=res;
                                console.log(res);
                                console.log(this.userData);
                              })

  }
}
