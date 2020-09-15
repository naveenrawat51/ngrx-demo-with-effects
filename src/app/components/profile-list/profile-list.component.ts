import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';

import { Observable } from 'rxjs';
import { Profiles } from './../../models/profiles.model';
import { AppState } from './../../app.state';
import { Store } from '@ngrx/store';
import * as ProfileActions from './../../store/action/profiles.action';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.scss']
})
export class ProfileListComponent implements OnInit {

  profiles: Observable<Profiles[]>;

  constructor(public profileService: ProfileService, public store: Store<AppState>) {
    this.profiles = store.select(myStore => myStore.profiles.profiles);
  }

  ngOnInit() {
    this.profileService.getProfiles().subscribe((response: any) => {
      this.store.dispatch(new ProfileActions.GetProfiles(response.data));
    });
  }

}
