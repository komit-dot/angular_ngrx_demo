import { Component, signal } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from './store/counter.actions';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  constructor(private store: Store){}

  inc(){
    this.store.dispatch(increment())
  }

  dec(){
    this.store.dispatch(decrement())
  }

  resetCount(){
    this.store.dispatch(reset())
  }
}
