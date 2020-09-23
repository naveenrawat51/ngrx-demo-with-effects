import { Action, createAction, props } from "@ngrx/store";
import { Profiles, UserParam } from "../../models/profiles.model";

export const LOGIN = "[Login Page] Login";
export const LOGOUT = "[Logout] Logout";
export const LOGIN_SUCCESS = "[Login Page] Login Success";
export const LOGIN_FAILURE = "[Login Page] Login Failure";
export const GET_PROFILES = "[PROFILES] Get";
export const GET_PROFILES_USING_EFFECTS = "[PROFILES] Get Using Effects";
export const GET_PROFILES_SUCCESS_EFFECT =
  "[PROFILES] Get Profile Success Effects";
export const GET_PROFILES_BY_ID = "[PROFILES] Get Profile By Id";
export const GET_PROFILES_FAIL_EFFECT = "[PROFILES] Get Profile Failed Effects";
export const SEARCH_TEXT = "[PROFILES] Search Text";
export const SEARCH_API_SUCCESS = "[PROFILES] Search Api Success";
export const SEARCH_API_FAILURE = "[PROFILES] Search Api Failure";
export const GET_SINGLE_PROFILE = "GET_SINGLE_PROFILE";
export class GetProfiles implements Action {
  readonly type = GET_PROFILES;

  constructor(public payload: Profiles[]) {}
}

export class GetProfilesWithEffect implements Action {
  readonly type = GET_PROFILES_USING_EFFECTS;
}

export class GetProfilesSuccessEffect implements Action {
  readonly type = GET_PROFILES_SUCCESS_EFFECT;

  constructor(public payload: Profiles[]) {}
}

export class GetProfilesFailedEffect implements Action {
  readonly type = GET_PROFILES_FAIL_EFFECT;

  constructor(public payload: any) {}
}

export class GetProfilesWithId implements Action {
  readonly type = GET_PROFILES_BY_ID;
  constructor(public payload: Profiles[]) {}
}

export class Login implements Action {
  readonly type = LOGIN;

  constructor(public payload: any) {}
}

export class LogOut implements Action {
  readonly type = LOGOUT;
}

export class LoginSuccess implements Action {
  readonly type = LOGIN_SUCCESS;
  constructor(public payload: any) {}
}

export class LoginFailure implements Action {
  readonly type = LOGIN_FAILURE;

  constructor(public error: Error) {}
}

export class SearchText implements Action {
  readonly type = SEARCH_TEXT;

  constructor(public payload: any) {}
}

export class SearchAPISuccess implements Action {
  readonly type = SEARCH_API_SUCCESS;
  constructor(public payload: any) {}
}

export class SearchAPIFailure implements Action {
  readonly type = SEARCH_API_FAILURE;

  constructor(public error: Error) {}
}

export class GetSingleProfile implements Action {
  readonly type = GET_SINGLE_PROFILE;

  constructor(public payload: Profiles[]) {}
}
// export const Login = createAction(LOGIN, props<{payload: UserParam}>());
// export const LoginSuccess = createAction(LOGIN_SUCCESS);
// export const LoginFailure = createAction(
//   LOGIN_FAILURE,
//   props<Error>()
// );

export type Actions =
  | GetProfiles
  | GetProfilesWithEffect
  | GetProfilesSuccessEffect
  | GetProfilesFailedEffect
  | GetProfilesWithId
  | Login
  | LoginSuccess
  | LoginFailure
  | LogOut
  | SearchText
  | SearchAPISuccess
  | SearchAPIFailure
  | GetSingleProfile;
