import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideStore, provideState } from '@ngrx/store';
import { counterFeature } from './store/counter.feature';
import { formFeature } from './form/form.feature';
import { provideEffects } from '@ngrx/effects';
import { userEffects } from './users/user.effects';
import { userFeature } from './users/user.feature';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideStore(),
    provideState(userFeature),
    provideEffects([userEffects])
]
};