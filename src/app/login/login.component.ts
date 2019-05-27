import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as userActions from '../state/user.action'; //import store action types (i.e UserActions)


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  strUserName:string;
  strPassword:string;
  maskUserName:boolean=false;
  constructor(private store:Store<any>) { }

  ngOnInit() {
    this.store.select('reducer').subscribe(x=>{
      if(x){
        console.log("Getting ......>NGRX Store Value is "+ JSON.stringify(x));
        this.maskUserName=x.maskUserName;
      }      
    });

  }

  checkStateChanged():void{
    console.log("Action fired");
    //Update Action name and value below 
    this.store.dispatch(new userActions.RememberMe(this.maskUserName));
  }
}