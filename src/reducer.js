import React, { useReducer } from 'react';
import { reducerFile } from './utils/reducerFile';

const Reducer = () => {
    const[state, dispatch] = useReducer(reducerFile, {user:'Jordan', count:0, clicks:0});

    const changeNameHandler = () => {
        const newName = ["Jared","Roxanne","Abigeil"]

        return{
            type: "change_name",
            payload: newName[Math.floor(Math.random()* newName.length)]
        }
    }

    return(
        <div className="container">
            <div>Current User: {state.user}</div>
            <div>Current Count: {state.count}</div>
            <div>Current Clicks: {state.clicks}</div>
            <button onClick={()=>dispatch({type:"increment",payload:1})}>Increment</button>
            <button onClick={()=>dispatch({type:"decrement",payload:1})}>Decrement</button>
            <button onClick={()=>dispatch(changeNameHandler())}>Change Name</button>
        </div>
    );
}

export default Reducer;