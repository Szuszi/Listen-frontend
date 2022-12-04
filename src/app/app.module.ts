import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';

import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { BottomAudioPlayerComponent } from './components/bottom-audio-player/bottom-audio-player.component';
import { NewestPageComponent } from './pages/newest-page/newest-page.component';
import { TrackUploadPageComponent } from './pages/track-upload-page/track-upload-page.component';
import { FavoritesPageComponent } from './pages/favorites-page/favorites-page.component';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { TrackPageComponent } from './pages/track-page/track-page.component';
import { TrackCardComponent } from './components/track-card/track-card.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    BottomAudioPlayerComponent,
    NewestPageComponent,
    TrackUploadPageComponent,
    FavoritesPageComponent,
    UserPageComponent,
    TrackPageComponent,
    TrackCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSliderModule,
    MatDividerModule,
    MatGridListModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
