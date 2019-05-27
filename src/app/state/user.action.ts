import { Action } from '@ngrx/store';

//create action type enum
export enum UserActionsTypes{
    RememberMe='[User] RememberMe'
}
//implement all action types action creators
export class RememberMe implements Action{
    readonly type= UserActionsTypes.RememberMe;
    constructor(public payload:boolean){}
}
//export user actions
export type UserActions=RememberMe