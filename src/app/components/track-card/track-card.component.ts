import { Component, Input, OnInit } from '@angular/core';
import { mockUsers } from 'src/app/model/mock-data';
import { UserTrack } from 'src/app/model/user-track.model';
import { User } from 'src/app/model/user.model';
import { AudioPlayerService } from 'src/app/services/audio-player.service';

@Component({
  selector: 'app-track-card',
  templateUrl: './track-card.component.html',
  styleUrls: ['./track-card.component.css'],
})
export class TrackCardComponent implements OnInit {
  @Input() track: UserTrack | undefined;
  user: User | undefined;
  createdDate: Date | undefined;

  isPlaying: boolean = false;

  constructor(public audioPlayerService: AudioPlayerService) {}

  ngOnInit(): void {}

  ngOnChanges(): void {
    if (this.track) {
      this.user = mockUsers.find(user => user.id === this.track?.userId);
      this.createdDate = new Date(this.track?.createdAt);
    }
  }

  onPlayPressed(): void {
    if (this.track) {
      if (this.audioPlayerService.audio.src === this.track.audioUrl) {
        if (this.audioPlayerService.audio.paused) {
          this.audioPlayerService.playAudio();
          this.isPlaying = true;
        } else {
          this.audioPlayerService.pauseAudio();
          this.isPlaying = false;
        }
      } else {
        this.audioPlayerService.changeAudio(this.track.audioUrl);
        this.audioPlayerService.playAudio();
        this.isPlaying = true;
      }
    }
  }
}
