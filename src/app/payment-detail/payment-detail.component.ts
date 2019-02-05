import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-detail',
  templateUrl: './payment-detail.component.html',
  styleUrls: ['./payment-detail.component.css']
})
export class PaymentDetailComponent implements OnInit {

  paytabData: any = [
    { name: 'New User', id: 'Abc Vats', email: 'abc@gmail.com', url: 'assets/img/game.jpg' },
    { name: 'New User', id: 'Abc Vats', email: 'abc@gmail.com', url: 'assets/img/game.jpeg' },
    { name: 'New User', id: 'Abc Vats', email: 'abc@gmail.com', url: 'assets/img/game.jpeg' },
    // { name: 'New User', id: 'Abc Vats', email: 'abc@gmail.com', url: 'assets/img/game.jpeg' },
    // { name: 'New User', id: 'Abc Vats', email: 'abc@gmail.com', url: 'assets/img/game.jpeg' },
    // { name: 'New User', id: 'Abc Vats', email: 'abc@gmail.com', url: 'assets/img/game.jpeg' },
    // { name: 'New User', id: 'Abc Vats', email: 'abc@gmail.com', url: 'assets/img/game.jpeg' },
    // { name: 'New User', id: '1', email: 'abc@gmail.com', url: 'assets/img/notification.jpg' },
    // { name: 'New User', id: '1', email: 'abc@gmail.com' },
    // { name: 'New User', id: '1', email: 'abc@gmail.com' },
    // { name: 'New User', id: '1', email: 'abc@gmail.com' },
    // { name: 'New User', id:'1', email:'abc@gmail.com' },
    // { name: 'New User', id:'1', email:'abc@gmail.com' },
    // { name: 'New User', id:'1', email:'abc@gmail.com' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
