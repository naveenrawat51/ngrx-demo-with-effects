import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState } from "./app.state";
import { Router } from "@angular/router";
import * as ProfileActions from "./store/action/profiles.action";
import { map } from "rxjs/operators";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "ngrx-demo";
  isLoggeedIn$ = this.store
    .select((state) => state.profiles.user.isLoggedIn)
    .pipe(
      map((res) => {
        if (res) {
          this.router.navigate(["/profile-list-using-effects"]);
          //this.router.navigate(['/profile-list']);
        } else {
          this.router.navigate(["/"]);
        }
        return res;
      })
    );
  constructor(private store: Store<AppState>, private router: Router) {}

  logout() {
    this.store.dispatch(new ProfileActions.LogOut());
  }
}
