import * as ProfilesAction from './../action/profiles.action';

export interface ProfileState {
    profiles: [];
    profilesFromEffect: [];
}
const initialState: ProfileState = {
    profiles: [],
    profilesFromEffect: []
};

export function reducer(state = initialState, action: ProfilesAction.Actions) {
    switch (action.type) {
        case ProfilesAction.GET_PROFILES:
            const profiles = action.payload.slice();
            return { ...state, profiles };
        case ProfilesAction.GET_PROFILES_SUCCESS_EFFECT:
            const profilesFromEffect = action.payload.slice();
            return { ...state, profilesFromEffect };
        default:
            return state;
    }
}
