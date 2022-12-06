import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserTrack } from 'src/app/model/user-track.model';
import { User } from 'src/app/model/user.model';
import { UserTrackService } from 'src/app/services/user-track.service';

@Component({
  selector: 'app-track-page',
  templateUrl: './track-page.component.html',
  styleUrls: ['./track-page.component.css'],
})
export class TrackPageComponent implements OnInit {
  track: UserTrack | undefined;
  user: User | undefined;

  constructor(
    private route: ActivatedRoute,
    private userTrackService: UserTrackService
  ) {}

  ngOnInit(): void {
    this.loadUserTrack();
  }

  private loadUserTrack() {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.userTrackService.getUserTrackById(id.toString()).subscribe(track => {
      this.track = track;
      this.user = track.ownerUser;
    });
  }
}
