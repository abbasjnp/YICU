import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import{Service} from './../service'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  public usertabData;

  // usertabData: any = [
  //   { name: 'New User', id: 'Abc Vats', email: 'abc@gmail.com', url: 'assets/img/layer.jpg' },
  //   { name: 'New User', id: 'Abc Vats', email: 'abc@gmail.com', url: 'assets/img/notification.jpg' },
  //   { name: 'New User', id: 'Abc Vats', email: 'abc@gmail.com', url: 'assets/img/notification.jpg' },
  //   { name: 'New User', id: 'Abc Vats', email: 'abc@gmail.com', url: 'assets/img/notification.jpg' },
  //   { name: 'New User', id: 'Abc Vats', email: 'abc@gmail.com', url: 'assets/img/notification.jpg' },
  //   { name: 'New User', id: 'Abc Vats', email: 'abc@gmail.com', url: 'assets/img/notification.jpg' },
  //   { name: 'New User', id: 'Abc Vats', email: 'abc@gmail.com', url: 'assets/img/notification.jpg' },
  // ];

  constructor(private router:Router,
              private service:Service) { }

  ngOnInit() {
    this.getUserData();
  }

  getUserData(){
          this.service.getUser()
                             .subscribe((res:any)=>{
                               console.log(res),
                               this.usertabData=res.userdata
                              })
  }
  openDetail(){
    this.router.navigate(['/user-detail'])
  }

}
