import { Injectable } from '@angular/core';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { ProfileService } from './../../services/profile.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import {
    GetProfilesWithEffect,
    GetProfilesSuccessEffect,
    GetProfilesFailedEffect,
    GET_PROFILES_USING_EFFECTS
} from './../action/profiles.action';
import { of } from 'rxjs';

@Injectable()
export class ProfilesEffects {

    constructor(private action$: Actions, private profileService: ProfileService) {
    }

    @Effect() getProfiles$ = this.action$
        .pipe(
            ofType<GetProfilesWithEffect>(GET_PROFILES_USING_EFFECTS),
            mergeMap(
                () => this.profileService.getProfiles()
                    .pipe(
                        map(
                            (response: any) => new GetProfilesSuccessEffect(response.data)),
                        catchError((error: any) => of(new GetProfilesFailedEffect(error)))
                    ))
        );
}
