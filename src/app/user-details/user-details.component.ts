import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  gameData: any = [
    {
      gamename: 'Cricket', url: 'assets/img/game.jpeg',
      logon: 'assets/img/cross.png', level: 'Beginner'
    },

    {
      gamename: 'Volleyball', url: 'assets/img/game.jpeg',
      logon: 'assets/img/cross.png', level: 'Intermediate'
    },

    {
      gamename: 'Tennis', url: 'assets/img/game.jpeg',
      logon: 'assets/img/cross.png', level: 'Beginner'
    },

    {
      gamename: 'Cricket', url: 'assets/img/game.jpeg',
      logon: 'assets/img/cross.png', level: 'Advance'
    },
    {
      gamename: 'Cricket', url: 'assets/img/game.jpg',
      logon: 'assets/img/cross.png', level: 'Beginner'
    },

    {
      gamename: 'Volleyball', url: 'assets/img/game.jpg',
      logon: 'assets/img/cross.png', level: 'Intermediate'
    },

    // {
    //   gamename: 'Tennis', url: 'assets/img/game.jpg',
    //   logon: 'assets/img/cross.png', level: 'Beginner'
    // },

    // {
    //   gamename: 'Cricket', url: 'assets/img/game.jpg',
    //   logon: 'assets/img/cross.png', level: 'Advance'
    // },
  ];

  usertabData: any = [
    { name: 'New User', id: 'Abc Vats', email: 'abc@gmail.com', url: 'assets/img/layer.jpg' },
    { name: 'New User', id: 'Abc Vats', email: 'abc@gmail.com', url: 'assets/img/notification.jpg' },
    { name: 'New User', id: 'Abc Vats', email: 'abc@gmail.com', url: 'assets/img/notification.jpg' },
    { name: 'New User', id: 'Abc Vats', email: 'abc@gmail.com', url: 'assets/img/notification.jpg' },
    { name: 'New User', id: 'Abc Vats', email: 'abc@gmail.com', url: 'assets/img/notification.jpg' },
    { name: 'New User', id: 'Abc Vats', email: 'abc@gmail.com', url: 'assets/img/notification.jpg' },
    { name: 'New User', id: 'Abc Vats', email: 'abc@gmail.com', url: 'assets/img/notification.jpg' },
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
