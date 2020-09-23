import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { UserParam } from "../models/profiles.model";

@Injectable({
  providedIn: "root",
})
export class ProfileService {
  profileUrl = "https://dummyapi.io/data/api/user";
  loginUrl = "https://reqres.in/api/login";

  constructor(private http: HttpClient) {}

  getProfiles() {
    const headers = new HttpHeaders().set("app-id", "5f5def1851f728c78f594dcb");
    return this.http.get(this.profileUrl + "?limit=100", {
      headers,
    });
  }

  login(userParam: UserParam) {
    return this.http.get(
      this.loginUrl +
        "?email=" +
        userParam.email +
        "&password=" +
        userParam.password
    );
  }

  getProfileByQuery(query) {
    const headers = new HttpHeaders().set("app-id", "5f5def1851f728c78f594dcb");
    return this.http.get(this.profileUrl + `/${query}`, {
      headers,
    });
  }
}
