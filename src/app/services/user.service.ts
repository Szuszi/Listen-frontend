import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserTrack } from '../model/user-track.model';
import { User } from '../model/user.model';

@Injectable()
export class UserService {
  private userUrl = 'api/users';

  constructor(private http: HttpClient) {}

  getUser(): Observable<User[]> {
    return this.http.get<User[]>(this.userUrl);
  }

  getUserById(id: string): Observable<User> {
    return this.http.get<User>(this.userUrl + '/' + id);
  }

  getUserByName(name: string): Observable<User> {
    return this.http.get<User>(this.userUrl + '/name/' + name);
  }

  getUserTracks(id: string): Observable<UserTrack[]> {
    return this.http.get<UserTrack[]>(this.userUrl + '/' + id + '/tracks');
  }

  getUserFollowers(id: string): Observable<User[]> {
    return this.http.get<User[]>(this.userUrl + '/' + id + '/followers');
  }

  getUserFollowing(id: string): Observable<User[]> {
    return this.http.get<User[]>(this.userUrl + '/' + id + '/following');
  }
}
