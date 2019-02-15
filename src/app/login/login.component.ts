import { Component, OnInit, Output,EventEmitter} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import{Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   counter =true;

  constructor(private fb:FormBuilder,
              private router:Router) { }

  @Output() loginCounter = new EventEmitter()
              
  public loginForm=this.fb.group({
    userId : [''],
    password :['']
  })
  onSubmit(){
   console.log(this.loginForm.value)
   this.loginCounter.emit(this.counter);
   this.router.navigate(['/dashboard']);
   console.log(this.counter);
  

  }

  ngOnInit() {
  }

}
