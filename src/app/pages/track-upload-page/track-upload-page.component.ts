import { Component, OnInit } from '@angular/core';
import { NewUserTrack } from 'src/app/model/new-user-track.model';
import { UserTrackService } from 'src/app/services/user-track.service';

@Component({
  selector: 'app-track-upload-page',
  templateUrl: './track-upload-page.component.html',
  styleUrls: ['./track-upload-page.component.css'],
})
export class TrackUploadPageComponent implements OnInit {
  track: NewUserTrack = new NewUserTrack('', '', '');
  uploading: boolean = false;
  uploaded: boolean = false;

  constructor(private userTrackService: UserTrackService) {}

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.track) {
      this.uploading = true;
      this.uploaded = false;

      this.userTrackService
        .addNewUserTrack(this.track)
        .subscribe(uploadedTrack => {
          this.track = new NewUserTrack('', '', '');
          this.uploading = false;
          this.uploaded = true;
        });
    }
  }
}
