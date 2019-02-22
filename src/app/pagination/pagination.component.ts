import { Component, OnInit, Input,AfterViewInit } from '@angular/core';
import {PageService} from './../page.service'
import { fadeInItems } from '@angular/material';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit, AfterViewInit {
  @Input() items:any;
  constructor(private pageService:PageService) { }
    // pager object
    pager: any = {};
 
    // paged items
    pagedItems: any[];
    public all;


    // items =[
    //   {id: 12, profilepic: "Snake_River_5mb_dgcI79B.jpg", username: "Nikhil Kumar", email: "nikhil@gmail.com", mobile: "56447898765"},
    //   {id: 12, profilepic: "Snake_River_5mb_dgcI79B.jpg", username: "Nikhil Kumar", email: "nikhil@gmail.com", mobile: "56447898765"},
    //   {id: 12, profilepic: "Snake_River_5mb_dgcI79B.jpg", username: "Nikhil Kumar", email: "nikhil@gmail.com", mobile: "56447898765"},
    //   {id: 12, profilepic: "Snake_River_5mb_dgcI79B.jpg", username: "Nikhil Kumar", email: "nikhil@gmail.com", mobile: "56447898765"},
    //   {id: 12, profilepic: "Snake_River_5mb_dgcI79B.jpg", username: "Nikhil Kumar", email: "nikhil@gmail.com", mobile: "56447898765"},
    //   {id: 12, profilepic: "Snake_River_5mb_dgcI79B.jpg", username: "Nikhil Kumar", email: "nikhil@gmail.com", mobile: "56447898765"}
    //   ]

    

  ngOnInit() {
  
  }

  ngAfterViewInit(){
    console.log(this.items,"nggggggggggggggggg");
    this.all=this.items;
    this.setPage(1);
  
  }
  setPage(page: number) {
    console.log(page,'1111111111');
  
    // get pager object from service
   
    this.pager = this.pageService.getPager(this.all.length, page);
    
    // get current page of items
    this.pagedItems = this.all.slice(this.pager.startIndex, this.pager.endIndex + 1);
    
  }
}
