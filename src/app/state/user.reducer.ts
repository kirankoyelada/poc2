import { UserActions, UserActionsTypes } from './user.action';

//pure function
export function reducer(state,action:UserActions){
    console.log("Calling Reducer ....");
    switch(action.type){ //checking action type
        case UserActionsTypes.RememberMe: //action type
        console.log("Matched Action Type");
        return {
            ...state,maskUserName:action.payload //return action pay load and state
        };
        default:return state;
    }
}