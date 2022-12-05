import { Component, OnInit } from '@angular/core';
import { mockUserTracks } from 'src/app/model/mock-data';
import { UserTrack } from 'src/app/model/user-track.model';

@Component({
  selector: 'app-favorites-page',
  templateUrl: './favorites-page.component.html',
  styleUrls: ['./favorites-page.component.css'],
})
export class FavoritesPageComponent implements OnInit {
  tracks: UserTrack[] = mockUserTracks.filter(track => track.userId !== 12);

  constructor() {}

  ngOnInit(): void {}
}
