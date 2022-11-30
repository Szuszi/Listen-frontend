import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'listen-frontend';
  isLight = true;

  onSwitchTheme(): void {
    this.isLight = !this.isLight;
  }

  getRootClass() : string {
    if (this.isLight) return "light-theme";
    return "dark-theme";
  }
}
