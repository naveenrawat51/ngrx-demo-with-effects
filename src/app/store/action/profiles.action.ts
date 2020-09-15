import { Action } from '@ngrx/store';
import { Profiles } from '../../models/profiles.model';

export const GET_PROFILES = '[PROFILES] Get';
export const GET_PROFILES_USING_EFFECTS = '[PROFILES] Get Using Effects';
export const GET_PROFILES_SUCCESS_EFFECT = '[PROFILES] Get Profile Success Effects';
export const GET_PROFILES_FAIL_EFFECT = '[PROFILES] Get Profile Failed Effects';

export class GetProfiles implements Action {
    readonly type = GET_PROFILES;

    constructor(public payload: Profiles[]) {

    }
}

export class GetProfilesWithEffect implements Action {
    readonly type = GET_PROFILES_USING_EFFECTS;
}

export class GetProfilesSuccessEffect implements Action {
    readonly type = GET_PROFILES_SUCCESS_EFFECT;

    constructor(public payload: Profiles[]) {

    }
}

export class GetProfilesFailedEffect implements Action {
    readonly type = GET_PROFILES_FAIL_EFFECT;

    constructor(public payload: any) {

    }
}

export type Actions = GetProfiles | GetProfilesWithEffect | GetProfilesSuccessEffect | GetProfilesFailedEffect;

