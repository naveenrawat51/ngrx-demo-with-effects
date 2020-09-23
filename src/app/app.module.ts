import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./material.module";
import { LoginComponent } from "./components/login/login.component";
import { ProfileListComponent } from "./components/profile-list/profile-list.component";
import { ProfileComponent } from "./components/profile/profile.component";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {
  MatAutocompleteModule,
  MatSelectModule,
  MatFormFieldModule,
} from "@angular/material";
import { StoreModule } from "@ngrx/store";
import { reducer } from "./store/reducer/profile.reducer";

import { EffectsModule } from "@ngrx/effects";
import { ProfilesEffects } from "./store/effect/profiles.effects";
import { ProfileListUsingEffectsComponent } from "./components/profile-list-using-effects/profile-list-using-effects.component";

// ngrx devtools added here
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { environment } from "../environments/environment"; // Angular CLI environment

// logger added here
import { storeLogger } from "ngrx-store-logger";
export function logger(reducer1: any): any {
  return storeLogger()(reducer1);
}
export const metaReducers = environment.production ? [] : [logger];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileListComponent,
    ProfileComponent,
    ProfileListUsingEffectsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot(
      {
        profiles: reducer,
      },
      { metaReducers }
    ),
    EffectsModule.forRoot([ProfilesEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
