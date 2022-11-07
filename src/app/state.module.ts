import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { metaReducers, reducers } from './ngrx/reducers';
import { effects } from './ngrx/effects';
import { ProjectsApiService } from './shared/services/api/projects.api.service';
import { ResponsibilitiesApiService } from './shared/services/api/responsibilities.api.service';
import { SpecializationsApiService } from './shared/services/api/specializations.api.service';
import { ProjectRolesApiService } from './shared/services/api/prject-roles.api.services';

@NgModule({
  imports: [
    StoreModule.forRoot(reducers, {
      metaReducers,
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot(effects),
  ],
  providers: [ProjectsApiService, ResponsibilitiesApiService, SpecializationsApiService, ProjectRolesApiService],
})
export class StateModule {}
