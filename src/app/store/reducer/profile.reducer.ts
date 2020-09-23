import * as ProfilesAction from "./../action/profiles.action";
import { createReducer, on } from "@ngrx/store";

export interface IUserState {
  isLoggedIn: boolean;
  username: string;
}

export interface ProfileState {
  user: IUserState;
  profiles: [];
  profilesFromEffect: [];
  searchProfile: [];
  searchText: "";
  singleUserPofile: any;
  error: Error;
}
const initialState: ProfileState = {
  user: { isLoggedIn: false, username: "" },
  profiles: [],
  profilesFromEffect: [],
  searchProfile: [],
  searchText: "",
  singleUserPofile: null,
  error: null,
};

export function reducer(state = initialState, action: ProfilesAction.Actions) {
  switch (action.type) {
    case ProfilesAction.GET_PROFILES:
      const profiles = action.payload.slice();
      return { ...state, profiles };
    case ProfilesAction.GET_PROFILES_SUCCESS_EFFECT:
      const profilesFromEffect = action.payload.slice();
      return { ...state, profilesFromEffect };
    case ProfilesAction.LOGIN:
      return state;
    case ProfilesAction.LOGIN_SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          isLoggedIn: true,
          username: action.payload.email,
        },
      };
    case ProfilesAction.LOGIN_FAILURE:
      return { ...state, error: action.error };
    case ProfilesAction.LOGOUT:
      return {
        ...state,
        user: { ...state.user, isLoggedIn: false, username: "" },
      };
    case ProfilesAction.SEARCH_TEXT:
      return {
        ...state,
        searchText: action.payload,
      };
    case ProfilesAction.SEARCH_API_SUCCESS:
      return {
        ...state,
        searchProfile: action.payload,
      };
    case ProfilesAction.SEARCH_API_FAILURE:
      return { ...state, error: action.error };
    case ProfilesAction.GET_SINGLE_PROFILE:
      return { ...state, singleUserPofile: action.payload };
    default:
      return state;
  }
}

// const reducerProfile = createReducer(
//   initialState,
//   on(ProfilesAction.Login, (state: ProfileState) => state),
//   on(ProfilesAction.LoginSuccess, (state: ProfileState) => ({
//     ...state,
//     user: { ...state.user, isLoggedIn: true },
//   })),
//   on(ProfilesAction.LoginFailure, (state: ProfileState, err: Error) => ({...state, error: err}))
// );

// export function reducer(
//     state: ProfileState,
//     action: ProfilesAction.Actions
//   ) {
//     return reducerProfile(state, action);
//   }
