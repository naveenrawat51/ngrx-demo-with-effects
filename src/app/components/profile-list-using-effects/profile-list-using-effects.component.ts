import { Component, OnInit } from "@angular/core";

import { Observable } from "rxjs";
import { Profiles } from "./../../models/profiles.model";
import { AppState } from "./../../app.state";
import { Store } from "@ngrx/store";
import * as ProfileActions from "./../../store/action/profiles.action";
import { ProfileService } from "src/app/services/profile.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-profile-list-using-effects",
  templateUrl: "./profile-list-using-effects.component.html",
  styleUrls: ["./profile-list-using-effects.component.scss"],
})
export class ProfileListUsingEffectsComponent implements OnInit {
  profiles: Observable<Profiles[]>;

  constructor(
    public profileService: ProfileService,
    public store: Store<AppState>,
    private router: Router
  ) {
    this.profiles = store.select(
      (myStore) => myStore.profiles.profilesFromEffect
    );
  }

  ngOnInit() {
    this.store.dispatch(new ProfileActions.GetProfilesWithEffect());
  }

  navigate(event, id) {
    event.stopPropagation();
    this.router.navigate(["/profile-details", id]);
  }
}
