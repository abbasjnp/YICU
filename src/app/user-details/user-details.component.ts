import { Component, OnInit } from '@angular/core';
import{ActivatedRoute} from '@angular/router';
import{Service} from './../service'

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
 public user;
 public userDetail;
 public rating;
 public ratingList=[];

  constructor(private route:ActivatedRoute,
              private service:Service) { }
  ngOnInit() {
    // const id =this.route.snapshot.paramMap.get('id');
    // console.log(id,"id");
    this.getUserDetail();
    console.log(this.user,"outttttt")
  }

  getUserDetail(){
    const id = +this.route.snapshot.paramMap.get('id');
    this.service.getUser()
                      .subscribe((user:any)=>
                            {console.log(user,"uuuuuuuuuu"),
                              this.user=user.userdata,
                            console.log(this.user,'usssserrrrrrr'),
                            console.log(id,"idddd"),
                          this.userDetail=this.user.find(t=>t.id===id)
                          console.log(this.userDetail);
                           this.rating=user.rating;
                           for(let i=1;i<=this.rating;i=i+1){
                             
                           }      
                              })
                  
   }
  

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

  



}
