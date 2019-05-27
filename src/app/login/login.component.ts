import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

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
    this.store.dispatch({
      type:'REMEMBER_ME', //action type
      payload:this.maskUserName //when action occured store payload value i.e state change
    });
  }
}