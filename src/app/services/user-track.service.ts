import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NewUserTrack } from '../model/new-user-track.model';
import { UserTrack } from '../model/user-track.model';

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

  addNewUserTrack(newTrack: NewUserTrack): Observable<UserTrack> {
    return this.http.post<UserTrack>(this.tracksUrl, newTrack);
  }

  editUserTrack(id: string, editedTrack: NewUserTrack): Observable<UserTrack> {
    return this.http.put<UserTrack>(this.tracksUrl + '/' + id, editedTrack);
  }

  deleteUserTrack(id: string) {
    return this.http.delete(this.tracksUrl + '/' + id);
  }
}
