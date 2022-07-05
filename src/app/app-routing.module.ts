import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { GalleryViewComponent } from './gallery-view/gallery-view.component';
import { GalleryComponent } from './gallery/gallery.component';
import { GalleryItemsService } from './services/gallery-items.service';

const routes: Routes = [
  { path: '', component: GalleryComponent, title: "Jason Rood Illustration", pathMatch: "full"},
  { path: 'About', component: AboutComponent, title: "Jason Rood Illustration - About", pathMatch: "full"},
  { path: ':path', component: GalleryViewComponent, resolve: { galleryItem: GalleryItemsService }}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
