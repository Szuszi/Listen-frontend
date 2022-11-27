import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'listen-frontend';
  isLight = true;
  showPlayer = false;

  onSwitchTheme(): void {
    this.isLight = !this.isLight;
  }

  onSwitchShowPlayer(): void {
    this.showPlayer = !this.showPlayer;
  }

  getRootClass() : string {
    if (this.isLight) return "light-theme";
    return "dark-theme";
  }
}
