import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/app.state";
import * as ProfileActions from "./../../store/action/profiles.action";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  public error$;
  private loginSuccess$;
  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.error$ = this.store.select((state) => state.profiles.error);
  }

  onClickSubmit(value) {
    this.store.dispatch(new ProfileActions.Login(value));
  }
}
