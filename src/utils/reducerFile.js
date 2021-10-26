export const reducerFile = (state,action)=>{
    switch(action.type){
        case "increment":
            return { ...state, count: state.count + action.payload, clicks:state.clicks++};
        case "decrement":
            return { ...state, count: state.count - action.payload, clicks:state.clicks++};
        case "change_name":
            return { ...state, user: action.payload};
        default:
            return state;
    }
}