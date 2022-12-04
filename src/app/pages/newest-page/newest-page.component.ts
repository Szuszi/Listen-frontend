import { Component, OnInit } from '@angular/core';
import { mockUserTracks } from 'src/app/model/mock-data';
import { UserTrack } from 'src/app/model/user-track.model';

@Component({
  selector: 'app-newest-page',
  templateUrl: './newest-page.component.html',
  styleUrls: ['./newest-page.component.css'],
})
export class NewestPageComponent implements OnInit {
  tracks: UserTrack[] = mockUserTracks;

  constructor() {}

  ngOnInit(): void {}
}
