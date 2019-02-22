import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Service } from './../service';
import { NgxSpinnerService } from 'ngx-spinner'
import  {CommonService} from './../common.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  requestData;

  constructor(private fb: FormBuilder,
    private router: Router,
    private service: Service,
    private spinner: NgxSpinnerService,
    private commonSerice:CommonService) { }

  public loginForm = this.fb.group({
    userId: ['nikhil@gmail.com'],
    password: ['987654']
  })
  ngOnInit() {

  }

  onSubmit() {
  this.spinner.show();
    this.requestData = {
      'email': this.loginForm.value.userId,
      'password': this.loginForm.value.password
    }
    this.service.loginUser(this.requestData)
      .subscribe(
        (res: any) => {
          this.spinner.hide();
          if (res.success) {
            this.commonSerice.showMessage(res.message)
            this.router.navigate(['admin']);
            this.service.getLoggedIn(true);
            localStorage.setItem('token', res.data.access_token);
          }
          if(res.success==false){
            this.commonSerice.showMessage(res.error)
          }
        },
        (error) =>
          { 
          this.spinner.hide()
          this.commonSerice.showError(error);
          }
      )}



}
