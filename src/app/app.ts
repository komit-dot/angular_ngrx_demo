import { Component, inject, signal } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from './store/counter.actions';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { counterFeature } from './store/counter.feature';
import { formFeature } from './form/form.feature';
import { updateFormField, resetFormField } from './form/form.actions';


@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  // form$!: Observable<{name: string, email: string}>;

  // constructor(private store: Store){
  //   this.form$ = this.store.select(formFeature.selectFormState)
  // }
  private store = inject(Store);
  form$ = this.store.select(formFeature.selectFormState)
  updatedField(field: 'name' |'email', value: string){
    this.store.dispatch(updateFormField({field, value}));
  }

  resetForm(){
    this.store.dispatch(resetFormField());
  }
}