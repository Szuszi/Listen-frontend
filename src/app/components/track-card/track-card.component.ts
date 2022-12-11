import { Component, Input, OnInit } from '@angular/core';
import { mockUsers } from 'src/app/model/mock-data';
import { UserTrack } from 'src/app/model/user-track.model';
import { User } from 'src/app/model/user.model';
import { AudioPlayerService } from 'src/app/services/audio-player.service';
import { AuthenticationService } from 'src/app/services/auth.service';
import { FavoriteService } from 'src/app/services/favorite.service';

@Component({
  selector: 'app-track-card',
  templateUrl: './track-card.component.html',
  styleUrls: ['./track-card.component.css'],
})
export class TrackCardComponent implements OnInit {
  @Input() track: UserTrack | undefined;
  trackOwnerUser: User | undefined;
  createdDate: Date | undefined;
  isFavorited: boolean | undefined;

  constructor(
    public audioPlayerService: AudioPlayerService,
    public authService: AuthenticationService,
    private favoriteService: FavoriteService
  ) {}

  ngOnInit(): void {}

  ngOnChanges(): void {
    if (this.track) {
      this.trackOwnerUser = this.track.ownerUser;
      this.createdDate = new Date(this.track?.createdAt);

      if (this.authService.authenticatedUser) {
        this.isFavorited =
          this.track.userFavorites.findIndex(
            user => user.id === this.authService.authenticatedUser?.id
          ) !== -1;
      }
    }
  }

  onFavoritePressed(): void {
    if (this.track) {
      if (this.isFavorited) {
        this.favoriteService
          .unFavoriteUserTrack(this.track.id.toString())
          .subscribe(newFavorites => {
            this.isFavorited = false;
          });
      } else {
        this.favoriteService
          .favoriteUserTrack(this.track.id.toString())
          .subscribe(newFavorites => {
            this.isFavorited = true;
          });
      }
    }
  }

  onPlayPressed(): void {
    if (this.track) {
      if (this.audioPlayerService.audio.src === this.track.audioUrl) {
        if (this.audioPlayerService.audio.paused) {
          this.audioPlayerService.playAudio();
        } else {
          this.audioPlayerService.pauseAudio();
        }
      } else {
        this.audioPlayerService.changeAudio(this.track.audioUrl);
        this.audioPlayerService.playAudio();
      }
    }
  }
}
