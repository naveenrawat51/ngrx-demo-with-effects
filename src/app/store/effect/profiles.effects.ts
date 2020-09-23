import { Injectable } from "@angular/core";
import {
  mergeMap,
  map,
  catchError,
  debounceTime,
  switchMap,
} from "rxjs/operators";
import { ProfileService } from "./../../services/profile.service";
import { Actions, Effect, ofType } from "@ngrx/effects";
import {
  GetProfilesWithEffect,
  GetProfilesSuccessEffect,
  GetProfilesFailedEffect,
  GET_PROFILES_USING_EFFECTS,
  Login,
  LoginSuccess,
  LoginFailure,
  LOGIN,
  SearchText,
  SEARCH_TEXT,
  SearchAPISuccess,
  SearchAPIFailure,
} from "./../action/profiles.action";
import { of } from "rxjs";
import { UserParam } from "src/app/models/profiles.model";

@Injectable()
export class ProfilesEffects {
  constructor(
    private action$: Actions,
    private profileService: ProfileService
  ) {}

  @Effect() getProfiles$ = this.action$.pipe(
    ofType<GetProfilesWithEffect>(GET_PROFILES_USING_EFFECTS),
    mergeMap(() =>
      this.profileService.getProfiles().pipe(
        map((response: any) => new GetProfilesSuccessEffect(response.data)),
        catchError((error: any) => of(new GetProfilesFailedEffect(error)))
      )
    )
  );

  @Effect() login$ = this.action$.pipe(
    ofType<Login>(LOGIN),
    mergeMap((action) => {
      const userParam: UserParam = {
        email: action.payload.email,
        password: action.payload.password,
      };
      return this.profileService.login(userParam).pipe(
        map((_) => new LoginSuccess(userParam)),
        catchError((error) => of(new LoginFailure(error)))
      );
    })
  );

  @Effect() searchText$ = this.action$.pipe(
    ofType<SearchText>(SEARCH_TEXT),
    debounceTime(300),
    map((action: SearchText) => action.payload),
    switchMap((query) => {
      return this.profileService.getProfileByQuery(query).pipe(
        map((response) => new SearchAPISuccess(response)),
        catchError((error) => of(new SearchAPIFailure(error)))
      );
    })
  );
}
