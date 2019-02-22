import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Service } from './../service'
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
  outdoorPercentage: number;
  fitness;
  outdoor;
  indoor;
  others;
  adventure;
  recentUserData;
  recentSessiondata;

  constructor(private router: Router,
    private service: Service) { }


  ngOnInit() {
    this.getRecentUserData();
    this.getChart();
  }
  getRecentUserData() {

    this.service.getRecentUsers()
      .subscribe((data: any) => {
      this.value = data;
        this.current_user = data.current_users;
        this.total_user = data.total_user;
        this.recentUserData = data.userdata;
        this.recentSessiondata = data.sessiondata;
      }
      )
  }

  openDetail() {
    this.router.navigate(['/user-detail'])
  }
  getChart() {
    this.service.getRecentUsers()
      .subscribe((res: any) => {
       
        this.outdoorPercentage = res.outdoorpercentage;
        this.fitness = res.fitnesspercentage;
        this.indoor = res.indoorpercentage;
        this.others = res.otherpercentage;
        this.adventure = res.adventurepercentage;
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
