import { Component, OnInit } from '@angular/core';
import { UserTrack } from 'src/app/model/user-track.model';
import { AuthenticationService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-favorites-page',
  templateUrl: './favorites-page.component.html',
  styleUrls: ['./favorites-page.component.css'],
})
export class FavoritesPageComponent implements OnInit {
  tracks: UserTrack[] | undefined;

  constructor(
    private userService: UserService,
    private authService: AuthenticationService
  ) {}

  ngOnInit(): void {
    this.loadTracks();
  }

  private loadTracks() {
    if (this.authService.authenticatedUser) {
      this.userService
        .getFavoritedUserTracks(
          this.authService.authenticatedUser.id.toString()
        )
        .subscribe(tracks => {
          this.tracks = tracks;
        });
    }
  }
}
