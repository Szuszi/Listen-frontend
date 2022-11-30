import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';

import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { BottomAudioPlayerComponent } from './bottom-audio-player/bottom-audio-player.component';
import { NewestPageComponent } from './pages/newest-page/newest-page.component';
import { TrackUploadPageComponent } from './pages/track-upload-page/track-upload-page.component';
import { FavoritesPageComponent } from './pages/favorites-page/favorites-page.component';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { TrackPageComponent } from './pages/track-page/track-page.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    BottomAudioPlayerComponent,
    NewestPageComponent,
    TrackUploadPageComponent,
    FavoritesPageComponent,
    UserPageComponent,
    TrackPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
