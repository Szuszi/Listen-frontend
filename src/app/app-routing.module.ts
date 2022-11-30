import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoritesPageComponent } from './pages/favorites-page/favorites-page.component';
import { NewestPageComponent } from './pages/newest-page/newest-page.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { TrackPageComponent } from './pages/track-page/track-page.component';
import { TrackUploadPageComponent } from './pages/track-upload-page/track-upload-page.component';
import { UserPageComponent } from './pages/user-page/user-page.component';

const routes: Routes = [
  { path: 'newest', component: NewestPageComponent },
  { path: 'upload', component: TrackUploadPageComponent },
  { path: 'user-track/:id/edit', component: TrackUploadPageComponent },
  { path: 'favorites', component: FavoritesPageComponent },
  { path: 'user/:id', component: UserPageComponent },
  { path: 'user-track/:id', component: TrackPageComponent },
  { path: '', redirectTo: '/newest', pathMatch: "full"},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
