import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user.model';
import { UserService } from './user.service';

interface AuthUser {
  name: string;
  authorities: {
    authority: string;
  }[];
}

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  authenticatedUser: User | undefined;
  isAdmin: boolean | undefined;

  private authUrl = 'api/auth';

  constructor(private http: HttpClient, private userService: UserService) {
    this.fetchCurrentUser().subscribe(authUser => {
      this.isAdmin =
        authUser.authorities.findIndex(
          obj => obj.authority === 'ROLE_ADMIN'
        ) !== -1;

      this.userService.getUserByName(authUser.name).subscribe(user => {
        this.authenticatedUser = user;
      });
    });
  }

  fetchCurrentUser(): Observable<AuthUser> {
    return this.http.get<AuthUser>(this.authUrl + '/me');
  }
}
