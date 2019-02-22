import { Injectable,ViewEncapsulation, Component } from '@angular/core';
import{MatSnackBar} from '@angular/material'

@Component({
  encapsulation:ViewEncapsulation.None
})

@Injectable({
  providedIn: 'root',
 
})
export class CommonService {

  constructor(private snackBar:MatSnackBar) { }

  public showMessage(message){
    this.snackBar.open(message,'',{
      duration:3000,
       horizontalPosition:'right',
       verticalPosition:'top',
       panelClass: 'back-green',
    })
  }
  public showError(message){
    this.snackBar.open(message,'',{
      duration:3000,
       horizontalPosition:'right',
       verticalPosition:'top',
       panelClass: 'back-green',
    })
  }

}
