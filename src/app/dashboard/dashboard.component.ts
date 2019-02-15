import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Service} from './../service'
 import CanvasJS from './../canvas.min'
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  dataSource: Object;
  public tabData;
  public value;
  current_user;
  total_user;
  outdoorPercentage:number;
  fitness;
  outdoor;
  indoor;
  others;
  adventure;
  recentUserData;
  recentSessiondata;

  





  constructor(private router:Router,
    private service:Service) {
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
  this.getRecentUserData();
  this.getChart();
    
    
  } 
  getRecentUserData(){
    
    this.service.getRecentUsers()
                      .subscribe((data:any)=>
                      { this.value =data;
                        console.log(data);
                       // console.log(data.outdoorpercentage);
                       // console.log(JSON.parse (data.indoorpercentage));
                      //  this.outdoorPercentage=data.outdoorPercentage;
                       // this.fitness = data.
                        this.current_user = data.current_users;
                        this.total_user = data.total_user;                        
                         this.recentUserData=data.userdata; 
                         this.recentSessiondata=data.sessiondata;     
                         console.log(this.recentSessiondata);               
                         }
                      )    
                               
  }
 
  openDetail(){
    this.router.navigate(['/user-detail'])
  }
  getChart(){
    this.service.getRecentUsers()
                          .subscribe((res:any)=>{
                            this.outdoorPercentage=res.outdoorpercentage;
                            this.fitness = res.fitnesspercentage;
                            this.indoor=res.indoorpercentage;
                            this.others = res.otherpercentage;
                            this.adventure = res.adventurepercentage;
                          
    console.log(this.outdoorPercentage,"getttt");
    let chart = new CanvasJS.Chart("chartContainer", {
      theme: "light2",
      animationEnabled: true,
      exportEnabled: true,
      // title:{
      //   text: "Sport Statistics"
      // },
      data: [{
        type: "pie",
        showInLegend: true,
        toolTipContent: "<b>{name}</b>: {y}%",
        indexLabel: "{name} - {y}%",
        dataPoints: [
          { y: this.outdoorPercentage, name: "OutDoor" },
          { y: this.indoor, name: "Indoor" },
          { y: this.fitness, name: "Fitness" },
          { y: this.adventure, name: "Adventure" },
          { y: this.others, name: "Other" },
          
        ]
      }]
    });
      
    chart.render();
  })
  }

}
