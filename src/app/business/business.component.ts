import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import{Service} from './../service'
@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {

  usertabData: any = [
    // { name: 'New User', id: 'Abc Vats', email: 'abc@gmail.com', url: 'assets/img/layer.jpg' },
    // { name: 'New User', id: 'Abc Vats', email: 'abc@gmail.com', url: 'assets/img/notification.jpg' },
    // { name: 'New User', id: 'Abc Vats', email: 'abc@gmail.com', url: 'assets/img/notification.jpg' },
    // { name: 'New User', id: 'Abc Vats', email: 'abc@gmail.com', url: 'assets/img/notification.jpg' },
    // { name: 'New User', id: 'Abc Vats', email: 'abc@gmail.com', url: 'assets/img/notification.jpg' },
    // { name: 'New User', id: 'Abc Vats', email: 'abc@gmail.com', url: 'assets/img/notification.jpg' },
    // { name: 'New User', id: 'Abc Vats', email: 'abc@gmail.com', url: 'assets/img/notification.jpg' },
    // { name: 'New User', id: '1', email: 'abc@gmail.com', url: 'assets/img/notification.jpg' },
    // { name: 'New User', id: '1', email: 'abc@gmail.com' },
    // { name: 'New User', id: '1', email: 'abc@gmail.com' },
    // { name: 'New User', id: '1', email: 'abc@gmail.com' },
    // { name: 'New User', id:'1', email:'abc@gmail.com' },
    // { name: 'New User', id:'1', email:'abc@gmail.com' },
    // { name: 'New User', id:'1', email:'abc@gmail.com' },
  ];

  constructor(private router:Router,public service:Service) { }

  ngOnInit() {
    this.getBusinessList();
  }
  getBusinessList(){
    this.service.getBusiness()
                            .subscribe((res:any)=>{
                              this.usertabData=res.data;
                              console.log(res,"business");
                            })
  }

  openDetails(){
    this.router.navigate(['/business-detail'])
  }
}
