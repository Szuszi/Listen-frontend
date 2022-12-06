import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserTrack } from '../model/user-track.model';
import { User } from '../model/user.model';

@Injectable()
export class UserTrackService {
  private tracksUrl = 'api/user-tracks';

  constructor(private http: HttpClient) {}

  getNewestUserTracks(): Observable<UserTrack[]> {
    return this.http.get<UserTrack[]>(this.tracksUrl + '/newest');
  }

  getUserTrackById(id: string): Observable<UserTrack> {
    return this.http.get<UserTrack>(this.tracksUrl + '/' + id);
  }
}
