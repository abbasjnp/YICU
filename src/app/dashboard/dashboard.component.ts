import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router' 

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  dataSource: Object;

  imageData: any = [
    {
      name: 'New User', url: 'assets/img/notification.jpg',
      logon: 'assets/img/cross.png', lineBarValue: '200'
    },
    {
      name: 'Total User', url: 'assets/img/notification.jpg',
      lineBarValue: '4000'
    },
    {
      name: 'New Sessions', url: 'assets/img/notification.jpg',
      logon: 'assets/img/cross.png', lineBarValue: '600'
    },
    {
      name: 'Total Sessions', url: 'assets/img/notification.jpg',
      lineBarValue: '800'
    },
  ];



  tabData: any = [
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






  constructor(private router:Router) {
    // console.log("in ")
    this.dataSource = {
      chart: {
        // "caption": "Countries With Most Oil Reserves [2017-18]",
        // "subCaption": "In MMbbl = One Million barrels",
        // "xAxisName": "Country",
        // "yAxisName": "Reserves (MMbbl)",
        // "numberSuffix": "K",
        // "theme": "fusion",
      },
      // Chart Data
      "data": [{
        "label": "Venezuela",
        "value": "290"
      }, {
        "label": "Saudi",
        "value": "260"
      }, {
        "label": "Canada",
        "value": "180"
      }, {
        "label": "Iran",
        "value": "140"
      }, {
        "label": "Russia",
        "value": "115"
      }, {
        "label": "UAE",
        "value": "100"
      }, {
        "label": "US",
        "value": "30"
      }, {
        "label": "China",
        "value": "30"
      }]
    };


  }

  ngOnInit() {
  }
  openDetail(){
    this.router.navigate(['/user-detail'])
  }

}
