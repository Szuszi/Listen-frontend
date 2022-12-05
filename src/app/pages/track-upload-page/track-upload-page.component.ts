import { Component, OnInit } from '@angular/core';
import { UserTrack } from 'src/app/model/user-track.model';

@Component({
  selector: 'app-track-upload-page',
  templateUrl: './track-upload-page.component.html',
  styleUrls: ['./track-upload-page.component.css'],
})
export class TrackUploadPageComponent implements OnInit {
  track: UserTrack;

  constructor() {
    this.track = new UserTrack(0, 0, '', '', '', '', '');
  }

  ngOnInit(): void {}

  onSubmit(): void {
    console.log(this.track);
  }
}
