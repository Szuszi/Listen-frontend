import { Component, Input, OnInit } from '@angular/core';
import { UserTrack } from 'src/app/model/user-track.model';
import { AudioPlayerService } from 'src/app/services/audio-player.service';
import { FastAverageColor } from 'fast-average-color';

@Component({
  selector: 'app-track-header',
  templateUrl: './track-header.component.html',
  styleUrls: ['./track-header.component.css'],
})
export class TrackHeaderComponent implements OnInit {
  @Input() track: UserTrack | undefined;

  pictureDominantColor: string = '';
  textColor: string = '';

  constructor(public audioPlayerService: AudioPlayerService) {}

  ngOnInit(): void {}

  ngOnChanges(): void {
    if (this.track) {
      this.loadDominantColor();
    }
  }

  private loadDominantColor() {
    const url = this.track?.pictureUrl;

    if (url) {
      const fac = new FastAverageColor();

      fac
        .getColorAsync(url)
        .then(color => {
          this.pictureDominantColor = color.hex;
          this.textColor = color.isDark ? '#fff' : '#000';
        })
        .catch(e => {
          console.log(e);
        });
    }
  }

  onPlayPressed(): void {
    if (this.track) {
      if (this.audioPlayerService.audio.src === this.track.audioUrl) {
        if (this.audioPlayerService.audio.paused) {
          this.audioPlayerService.playAudio();
        } else {
          this.audioPlayerService.pauseAudio();
        }
      } else {
        this.audioPlayerService.changeAudio(this.track.audioUrl);
        this.audioPlayerService.playAudio();
      }
    }
  }
}
