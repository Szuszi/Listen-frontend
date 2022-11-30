import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AudioPlayerService {
  audio: HTMLAudioElement = new Audio();

  constructor() {
    this.audio.src =
      'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3';
    this.audio.load();
  }

  playAudio() {
    this.audio.play();
  }

  pauseAudio() {
    this.audio.pause();
  }

  changeAudio(url: string) {
    this.audio.src = url;
    this.audio.load();
  }
}
