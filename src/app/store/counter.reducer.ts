import { createReducer, on } from "@ngrx/store";
import { decrement, increment, reset } from "./counter.actions";


// initial state
export const initialState =0

export const reducer = createReducer(
    initialState, on(increment, (state)=> state + 1), on(decrement, (state)=> state-1), 
    on(reset, ()=> initialState)

)

