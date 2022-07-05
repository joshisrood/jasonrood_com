import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { GalleryItem } from 'src/types/gallery-item.type';
import { GalleryItemsService } from './services/gallery-items.service';

@Component({
  selector: 'app-root',
  template: `
    <div class="flex flex-wrap max-w-screen-xl mx-auto mt-4 lg:h-[calc(100vh-1rem)]">
      <div class="lg:w-1/6 w-full my-4 lg:max-h-fit">
        <div class="w-32 mx-auto cursor-pointer">
          <img [routerLink]="['/']" class="aspect-square w-full" [src]="logo" />
        </div>
        <div class="text-center">
          Jason Rood
        </div>
        <div class="text-center text-xs">
          roodjason [at] jasonrood.com
        </div>
        <div class="mt-6 text-center">
          <h3 class="border-b border-stone-400 text-sm hidden lg:block">
            <a [routerLink]="['/']" class="cursor-pointer">Illustrations</a>
          </h3>
          <ol class="hidden lg:block leading-none">
            <li *ngFor="let item of galleryItems" class="mb-1.5">
              <a [routerLink]="'/'+[item.id]" class="text-xs">{{item.title}}</a>
            </li>
          </ol>
          <h3 class="border-b border-stone-400 text-sm lg:mt-3 mx-8 lg:mx-0">
            <a [routerLink]="['/About']" class="cursor-pointer">About</a>
          </h3>
        </div>
      </div>
      <div class="w-full lg:w-5/6 lg:h-full overflow-y-auto">
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  styles: []
})
export class AppComponent implements OnInit {

  logo: SafeResourceUrl = this.domSanitizer.bypassSecurityTrustResourceUrl("assets/Logo.png");
  galleryItems: GalleryItem[] = [];

  constructor(private domSanitizer: DomSanitizer, private galleryItemService: GalleryItemsService) {  }

  ngOnInit(): void {
    const select = new Date().getTime() % 5 + 1;
    this.logo = this.domSanitizer.bypassSecurityTrustResourceUrl("assets/Logo" + select.toString()+".png");
    this.galleryItems = this.galleryItemService.getList();
  }
}
