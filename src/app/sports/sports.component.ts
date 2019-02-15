import { Component, OnInit,AfterViewInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Service } from './../service'
import {PageService} from './../page.service'

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {
      constructor( private fb: FormBuilder,
                   private service: Service,
                   private pageService:PageService
                   ) { console.log('Constructor');
  }
  imagePreview1;
  flag1: boolean = false;
  flag2: boolean = false;
  flag3: boolean = false;
  imagePreview2;
  imagePreview3;
  imagePreview4;
  flag4: boolean = false;
  firstfile;
  secondfile;
  thirdFile;
  fourthFile;
  result;
  sportData;


  private allItems: any[];
 
    // pager object
    pager: any = {};
 
    // paged items
    pagedItems: any[];
 

  addSportForm = this.fb.group({
    sportname: ['', Validators.required],
    category: ['', Validators.required],

  })
  


  paytabData: any = [
    { name: 'New User', id: 'Abc Vats', email: 'abc@gmail.com', url: 'assets/img/game.jpg' },
    { name: 'New User', id: 'Abc Vats', email: 'abc@gmail.com', url: 'assets/img/game.jpeg' },
    { name: 'New User', id: 'Abc Vats', email: 'abc@gmail.com', url: 'assets/img/game.jpeg' },
    { name: 'New User', id: 'Abc Vats', email: 'abc@gmail.com', url: 'assets/img/game.jpeg' },
    { name: 'New User', id: 'Abc Vats', email: 'abc@gmail.com', url: 'assets/img/game.jpeg' },
    { name: 'New User', id: 'Abc Vats', email: 'abc@gmail.com', url: 'assets/img/game.jpeg' },
    { name: 'New User', id: 'Abc Vats', email: 'abc@gmail.com', url: 'assets/img/game.jpeg' },
    { name: 'New User', id: '1', email: 'abc@gmail.com', url: 'assets/img/notification.jpg' },

  ];
  ngOnInit() {
    this.getSportDetail();
   
  }
  
  
    //  Adding the Sports data to the server
  onSave() {
    const formData = new FormData();
    if(this.firstfile){formData.append('image1',this.firstfile);}
    if(this.secondfile){formData.append('image2', this.secondfile);}
    if(this.thirdFile){ formData.append('image3', this.thirdFile);}
    if(this.fourthFile){ formData.append('image4', this.fourthFile);}
    formData.append('sportname', this.addSportForm.value.sportname);
    formData.append('category', this.addSportForm.value.category);

    this.service.addSport(formData)
      .subscribe((res: any) => {
        this.result = res;
        console.log(this.result);
      }
      );
      this.getSportDetail();
      
  }
  onSelectFile1(event) {
    const file = event.target.files[0];
    this.firstfile = file;
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview1 = reader.result;
      this.flag1 = !this.flag2
    };
    reader.readAsDataURL(file);
  }

  onSelectFile2(event) {
    const file = event.target.files[0];
    this.secondfile = file;
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview2 = reader.result;
    };
    this.flag2 = !this.flag2
    reader.readAsDataURL(file);

  }
  onSelectFile3(event) {
    const file = event.target.files[0];
    this.thirdFile = file;
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview3 = reader.result;
      this.flag3 = !this.flag3
    };
    reader.readAsDataURL(file);
  }
  onSelectFile4(event) {
    const file = event.target.files[0];
    this.fourthFile = file;
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview4 = reader.result;
      this.flag4 = !this.flag4
    };
    reader.readAsDataURL(file);
  }
        //   Ends HERE (Adding the Sports Data to the Server)

// Getting the sport data from the server

getSportDetail(){
  this.service.getSport()
                      .subscribe((res:any)=>{
                      this.sportData=res.data;
                     
                      this.allItems=res.data;
                      // console.log(this.allItems,"allitems");
                      this.setPage(1);
                      
                      })
}
setPage(page: number) {
  // console.log(page,"page");
  // get pager object from service
  // console.log(this.allItems.length,"uyyyyyyyyyyyyyyyyyyyyy")
  this.pager = this.pageService.getPager(this.allItems.length, page);
  // console.log(this.pager);
  // get current page of items
  this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
  // console.log(this.pagedItems);
}

deleteSportDetail(id:number,i){
    this.service.deleteSport(id)
                        .subscribe((res:any)=>console.log(res));
                        this.pagedItems.splice(i, 1);
                     
}

}
