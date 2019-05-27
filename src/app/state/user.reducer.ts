//pure function
export function reducer(state,action){
    console.log("Calling Reducer ....");
    switch(action.type){ //checking action type
        case 'REMEMBER_ME': //action type
        console.log("Matched Action Type");
        return {
            ...state,maskUserName:action.payload //return action pay load and state
        };
        default:return state;
    }
}