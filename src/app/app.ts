import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from './store/counter.actions';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { counterFeature } from './store/counter.feature';
import { formFeature } from './form/form.feature';
import { updateFormField, resetFormField } from './form/form.actions';
import { userFeature } from './users/user.feature';
import { loadUsers } from './users/user.actions';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  users$!: Observable<any>;
  constructor(private store: Store) {
    this.users$ = this.store.select(userFeature.selectUserState);
  }

  load() {
    this.store.dispatch(loadUsers());
  }
}
