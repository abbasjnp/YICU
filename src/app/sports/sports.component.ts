import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {

 
  paytabData:any = [
    { name: 'New User', id: 'Abc Vats', email: 'abc@gmail.com', url: 'assets/img/game.jpg' },
    { name: 'New User', id: 'Abc Vats', email: 'abc@gmail.com', url: 'assets/img/game.jpeg' },
    { name: 'New User', id: 'Abc Vats', email: 'abc@gmail.com', url: 'assets/img/game.jpeg' },
    { name: 'New User', id: 'Abc Vats', email: 'abc@gmail.com', url: 'assets/img/game.jpeg' },
    { name: 'New User', id: 'Abc Vats', email: 'abc@gmail.com', url: 'assets/img/game.jpeg' },
    { name: 'New User', id: 'Abc Vats', email: 'abc@gmail.com', url: 'assets/img/game.jpeg' },
    { name: 'New User', id: 'Abc Vats', email: 'abc@gmail.com', url: 'assets/img/game.jpeg' },
    { name: 'New User', id: '1', email: 'abc@gmail.com', url: 'assets/img/notification.jpg' },
    // { name: 'New User', id: '1', email: 'abc@gmail.com' },
    // { name: 'New User', id: '1', email: 'abc@gmail.com' },
    // { name: 'New User', id: '1', email: 'abc@gmail.com' },
    // { name: 'New User', id:'1', email:'abc@gmail.com' },
    // { name: 'New User', id:'1', email:'abc@gmail.com' },
    // { name: 'New User', id:'1', email:'abc@gmail.com' },
  ];

  constructor() { 
    console.log("in sports")
  }

  ngOnInit() {
  }




  urls = new Array<string>();
  detectFiles(event) {
    this.urls = [];
    let files = event.target.files;
    if (files) {
      for (let file of files) {
        let reader = new FileReader();
        reader.onload = (e: any) => {
          this.urls.push(e.target.result);
        }
        reader.readAsDataURL(file);
      }
    }
  }

}
