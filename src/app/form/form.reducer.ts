import { createReducer, on } from "@ngrx/store";
import { updateFormField, resetFormField } from "./form.actions";

export interface FormState{
    name: string
    email: string;
}

export const initialState: FormState = {
  name: '',
  email: ''
}

export const reducer = createReducer(
    initialState,

    on(updateFormField, (state, { field,value })=>({
        ...state,
        [field]: value

    })), 
    
    on(resetFormField, () => initialState)
);