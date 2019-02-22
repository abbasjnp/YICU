import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Service} from './../service';
import {PageService} from './../page.service'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  public usertabData;
  public allItems;
  constructor(private router:Router,
              private service:Service,
              private pageService:PageService) { }

  ngOnInit() {
   //debugger;
    this.getUserData();
    console.log(this.allItems,"cccccccccccc");
  }
  getUserData(){
   // debugger;
          this.service.getUser()
                             .subscribe((res:any)=>{
                              // debugger;                            
                               this.usertabData=res.userdata;
                               console.log(res);
                              // debugger
                               this.allItems=res.userdata;
                               console.log(this.usertabData,"iiiiiiiiiiiiiiiii");
                              // debugger;
                               this.getData(this.usertabData);


                              })
  }

  getData(userdata){
   // debugger;
     this.allItems=userdata;
     console.log(this.allItems,'aaaaaaaaaaaaa');
  }
  openDetail(id:number){
    console.log(id);
    this.router.navigate(['admin/user-detail',id])
  }

}
