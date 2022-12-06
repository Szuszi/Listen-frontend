import { Component, OnInit } from '@angular/core';
import { UserTrack } from 'src/app/model/user-track.model';
import { UserTrackService } from 'src/app/services/user-track.service';

@Component({
  selector: 'app-favorites-page',
  templateUrl: './favorites-page.component.html',
  styleUrls: ['./favorites-page.component.css'],
})
export class FavoritesPageComponent implements OnInit {
  tracks: UserTrack[] | undefined;

  constructor(private userTrackService: UserTrackService) {}

  ngOnInit(): void {
    this.loadTracks();
  }

  private loadTracks() {
    this.userTrackService.getNewestUserTracks().subscribe(tracks => {
      this.tracks = tracks.filter(track => track.ownerUser.name !== 'Joe_11');
    });
  }
}
