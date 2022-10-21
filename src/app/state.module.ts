import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { storeReducers } from './store/constants/store.reducers';
import { storeEffects } from './store/constants/store.effects';
@NgModule({
  imports: [
    StoreModule.forRoot(storeReducers),
    EffectsModule.forRoot(storeEffects),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
})
export class StateModule {}
