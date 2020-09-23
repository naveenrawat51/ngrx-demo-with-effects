import { Component, OnInit } from "@angular/core";
import { ProfileService } from "src/app/services/profile.service";

import { Observable, combineLatest as observableCombineLatest } from "rxjs";
import { Profiles } from "./../../models/profiles.model";
import { AppState } from "./../../app.state";
import { Store } from "@ngrx/store";
import * as ProfileActions from "./../../store/action/profiles.action";
import { FormControl } from "@angular/forms";
import { debounceTime, map } from "rxjs/operators";
import { Router } from "@angular/router";

@Component({
  selector: "app-profile-list",
  templateUrl: "./profile-list.component.html",
  styleUrls: ["./profile-list.component.scss"],
})
export class ProfileListComponent implements OnInit {
  profiles$: Observable<Profiles[]>;
  searchInputControl = new FormControl();
  suggestQuery$: Observable<string>;
  isSuggestLoading$: Observable<boolean>;
  suggestResponse$: Observable<Profiles[]>;

  constructor(
    public profileService: ProfileService,
    public store: Store<AppState>,
    private router: Router
  ) {
    this.profiles$ = store.select((myStore) => myStore.profiles.profiles);
    this.suggestQuery$ = store.select((myStore) => myStore.profiles.searchText);
  }

  // key$ = this.store.select()

  ngOnInit() {
    this.profileService.getProfiles().subscribe((response: any) => {
      this.store.dispatch(new ProfileActions.GetProfiles(response.data));
    });

    this.searchInputControl.valueChanges
      .pipe(debounceTime(300))
      .subscribe((res) => {
        this.store.dispatch(new ProfileActions.SearchText(res));
      });

    this.suggestResponse$ = observableCombineLatest(
      this.suggestQuery$,
      this.profiles$
    ).pipe(
      map(([query, profiles]) => {
        const arr = [];
        const data = query
          ? profiles.forEach((profile) => {
              if (
                profile.firstName.toLowerCase().includes(query.toLowerCase())
              ) {
                arr.push(profile);
              }
            })
          : [];
        return arr;
      })
    );
  }

  navigate(event, id, profile) {
    event.stopPropagation();
    if (id) {
      this.router.navigate(["/profile-details", id]);
      this.store.dispatch(new ProfileActions.GetSingleProfile(profile));
    }
  }
}
