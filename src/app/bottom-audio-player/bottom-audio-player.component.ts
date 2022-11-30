import { Component, OnInit } from '@angular/core';
import { AudioPlayerService } from '../services/audio-player.service';

@Component({
  selector: 'app-bottom-audio-player',
  templateUrl: './bottom-audio-player.component.html',
  styleUrls: ['./bottom-audio-player.component.css']
})
export class BottomAudioPlayerComponent implements OnInit {

  volume: number | null = 0.5;

  constructor(public audioPlayerService: AudioPlayerService) {}

  ngOnInit(): void {}

  onPlayPressed(): void {
    if (this.audioPlayerService.audio.paused) {
      this.audioPlayerService.playAudio();
    } else {
      this.audioPlayerService.pauseAudio();
    }
  }

  onVolumeChanged(event: any): void {
    if (event.value || event.value === 0) {

      if (this.audioPlayerService.audio.muted && event.value > 0 ) {
        console.log("unmute!");
        this.audioPlayerService.audio.muted = false;
      }

      if (!this.audioPlayerService.audio.muted && event.value === 0) {
        console.log("mute!");
        this.audioPlayerService.audio.muted = true;
      }

      this.audioPlayerService.audio.volume = event.value
    }
  }

}