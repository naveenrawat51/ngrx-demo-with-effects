import { Component, OnInit } from "@angular/core";
import { ProfileService } from "src/app/services/profile.service";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/app.state";
import { Router } from "@angular/router";
import { Observable } from "rxjs";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"],
})
export class ProfileComponent implements OnInit {
  profile$: Observable<any>;

  constructor(
    public profileService: ProfileService,
    public store: Store<AppState>,
    private router: Router
  ) {
    this.profile$ = store.select(
      (myStore) => myStore.profiles.singleUserPofile
    );
  }

  ngOnInit() {}
}
