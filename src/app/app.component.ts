import { Component } from '@angular/core';
import { User } from './model/user.model';
import { AuthenticationService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'listen-frontend';
  isLight = true;

  constructor(private authService: AuthenticationService) {}

  onSwitchTheme(): void {
    this.isLight = !this.isLight;
  }

  getCurrentUser(): User | undefined {
    return this.authService.authenticatedUser;
  }

  getRootClass(): string {
    if (this.isLight) return 'light-theme';
    return 'dark-theme';
  }
}
