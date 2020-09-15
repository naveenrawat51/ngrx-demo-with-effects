import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { LoginComponent } from './components/login/login.component';
import { ProfileListComponent } from './components/profile-list/profile-list.component';
import { ProfileComponent } from './components/profile/profile.component';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { reducer } from './store/reducer/profile.reducer';

import { EffectsModule } from '@ngrx/effects';
import { ProfilesEffects } from './store/effect/profiles.effects';
import { ProfileListUsingEffectsComponent } from './components/profile-list-using-effects/profile-list-using-effects.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileListComponent,
    ProfileComponent,
    ProfileListUsingEffectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,

    StoreModule.forRoot({
      profiles: reducer
    }),
    EffectsModule.forRoot([ProfilesEffects])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
