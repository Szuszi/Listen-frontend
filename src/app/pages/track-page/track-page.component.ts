import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { mockUsers, mockUserTracks } from 'src/app/model/mock-data';
import { UserTrack } from 'src/app/model/user-track.model';
import { User } from 'src/app/model/user.model';

@Component({
  selector: 'app-track-page',
  templateUrl: './track-page.component.html',
  styleUrls: ['./track-page.component.css'],
})
export class TrackPageComponent implements OnInit {
  track: UserTrack | undefined;
  user: User | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.loadTrackData();
  }

  private loadTrackData() {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      const idNumber = Number(id);

      const foundTrack = mockUserTracks.find(track => track.id === idNumber);
      const foundUser = mockUsers.find(user => user.id === foundTrack?.userId);

      console.log(foundUser);

      if (foundTrack) this.track = foundTrack;
      if (foundUser) this.user = foundUser;
    }
  }
}
