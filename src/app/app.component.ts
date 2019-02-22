import { Component } from '@angular/core';
import { FLAGS } from '@angular/core/src/render3/interfaces/view';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Yicu';
  login = false;
  logCounter = true;
     constructor(){}

     OK(res){
       this.login=!this.login;
       this.logCounter=!this.logCounter;
     }
}
