import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserTrack } from '../model/user-track.model';

@Injectable()
export class FavoriteService {
  private favoritesUrl = 'api/favorites';

  constructor(private http: HttpClient) {}

  getUserTracksFavorites(id: string): Observable<UserTrack[]> {
    return this.http.get<UserTrack[]>(this.favoritesUrl + '/' + id);
  }

  favoriteUserTrack(id: string): Observable<UserTrack[]> {
    return this.http.post<UserTrack[]>(this.favoritesUrl + '/' + id, {});
  }

  unFavoriteUserTrack(id: string): Observable<UserTrack[]> {
    return this.http.put<UserTrack[]>(this.favoritesUrl + '/' + id, {});
  }
}
