import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  profileUrl = 'https://dummyapi.io/data/api/user?limit=100';

  constructor(private http: HttpClient) { }

  getProfiles() {
    const headers = new HttpHeaders()
      .set('app-id', '5f5def1851f728c78f594dcb');
    return this.http.get(this.profileUrl, {
      headers
    });
  }
}
