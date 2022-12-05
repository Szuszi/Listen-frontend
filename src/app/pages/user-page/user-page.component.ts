import { Component, OnInit } from '@angular/core';
import { mockUsers, mockUserTracks } from 'src/app/model/mock-data';
import { UserTrack } from 'src/app/model/user-track.model';
import { User } from 'src/app/model/user.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css'],
})
export class UserPageComponent implements OnInit {
  user: User | undefined;
  tracks: UserTrack[] | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.loadUserData();
    console.log('User loaded');
  }

  private loadUserData() {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      const idNumber = Number(id);

      const foundUser = mockUsers.find(user => user.id === idNumber);
      const foundTracks = mockUserTracks.filter(
        track => track.userId === idNumber
      );

      console.log(foundUser);

      if (foundUser) this.user = foundUser;
      if (foundTracks) this.tracks = foundTracks;
    }
  }
}
