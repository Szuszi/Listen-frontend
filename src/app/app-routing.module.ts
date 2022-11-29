import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'newest', component: AppComponent },
  { path: 'upload', component: AppComponent },
  { path: 'user/:id/edit', component: AppComponent },
  { path: 'favorites', component: AppComponent },
  { path: 'user/:id', component: AppComponent },
  { path: 'user-track/:id', component: AppComponent },
  { path: '', redirectTo: '/newest', pathMatch: "full"},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
