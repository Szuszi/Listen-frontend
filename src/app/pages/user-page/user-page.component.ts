import { Component, OnInit } from '@angular/core';
import { mockUsers, mockUserTracks } from 'src/app/model/mock-data';
import { UserTrack } from 'src/app/model/user-track.model';
import { User } from 'src/app/model/user.model';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css'],
})
export class UserPageComponent implements OnInit {
  user: User | undefined;
  tracks: UserTrack[] | undefined;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.loadUserData();
  }

  private loadUserData() {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.userService.getUserById(id.toString()).subscribe(user => {
      this.user = user;
      this.loadUserTracks();
    });
  }

  private loadUserTracks() {
    this.tracks = undefined;
    if (this.user) {
      this.userService
        .getUserTracks(this.user.id.toString())
        .subscribe(tracks => {
          this.tracks = tracks;
        });
    }
  }
}
