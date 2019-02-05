import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-session-details',
  templateUrl: './session-details.component.html',
  styleUrls: ['./session-details.component.css']
})
export class SessionDetailsComponent implements OnInit {


  playerData: any = [
    {
      gamename: 'Cricket', url: 'assets/img/game.jpg',
      logon: 'assets/img/cross.png', level: 'Beginner'
    },

    {
      gamename: 'Volleyball', url: 'assets/img/game.jpg',
      logon: 'assets/img/cross.png', level: 'Intermediate'
    },

    {
      gamename: 'Tennis', url: 'assets/img/game.jpg',
      logon: 'assets/img/cross.png', level: 'Beginner'
    },

    {
      gamename: 'Cricket', url: 'assets/img/game.jpg',
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

  constructor() { }

  ngOnInit() {
  }

}
