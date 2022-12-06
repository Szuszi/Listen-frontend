import { Component, OnInit } from '@angular/core';
import { UserTrack } from 'src/app/model/user-track.model';
import { UserTrackService } from 'src/app/services/user-track.service';

@Component({
  selector: 'app-newest-page',
  templateUrl: './newest-page.component.html',
  styleUrls: ['./newest-page.component.css'],
})
export class NewestPageComponent implements OnInit {
  tracks: UserTrack[] | undefined;

  constructor(private userTrackService: UserTrackService) {}

  ngOnInit(): void {
    this.loadTracks();
  }

  private loadTracks() {
    this.userTrackService.getNewestUserTracks().subscribe(tracks => {
      this.tracks = tracks;
    });
  }
}
