import { Component, OnInit } from '@angular/core';
import { mockUsers } from 'src/app/model/mock-data';
import { UserTrack } from 'src/app/model/user-track.model';
import { User } from 'src/app/model/user.model';

@Component({
  selector: 'app-track-upload-page',
  templateUrl: './track-upload-page.component.html',
  styleUrls: ['./track-upload-page.component.css'],
})
export class TrackUploadPageComponent implements OnInit {
  track: UserTrack;

  constructor() {
    this.track = new UserTrack(0, mockUsers[0], '', '', '', '', '');
  }

  ngOnInit(): void {}

  onSubmit(): void {
    console.log(this.track);
  }
}
