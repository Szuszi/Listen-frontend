import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';

import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { BottomAudioPlayerComponent } from './components/bottom-audio-player/bottom-audio-player.component';
import { NewestPageComponent } from './pages/newest-page/newest-page.component';
import { TrackUploadPageComponent } from './pages/track-upload-page/track-upload-page.component';
import { FavoritesPageComponent } from './pages/favorites-page/favorites-page.component';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { TrackPageComponent } from './pages/track-page/track-page.component';
import { TrackCardComponent } from './components/track-card/track-card.component';
import { TrackHeaderComponent } from './components/track-header/track-header.component';
import { UserService } from './services/user.service';
import { UserTrackService } from './services/user-track.service';

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
    TrackHeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [UserService, UserTrackService],
  bootstrap: [AppComponent],
})
export class AppModule {}
