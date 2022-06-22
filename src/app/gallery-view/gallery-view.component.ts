import { Component, OnDestroy, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { GalleryItem } from 'src/types/gallery-item.type';

@Component({
  selector: 'app-gallery-view',
  template: `
    <div class="lg:px-0 px-8 mb-20 mx-auto" *ngIf="imgUrl$ | async as imgUrl">
      <img [src]="imgUrl" 
        class="w-full aspect-auto border-stone-400 border" />
      <div class="flex justify-end">
        <div class="w-1/2 pr-1 text-right font-semibold text-gray-700"> 
          <span>{{galleryItem.title}}</span>
        </div>
      </div>
    </div>
  `,
  styles: [
  ]
})
export class GalleryViewComponent implements OnInit, OnDestroy {

  galleryItem: GalleryItem;
  imgUrl$: BehaviorSubject<SafeResourceUrl>;

  constructor(private domSanitizer: DomSanitizer, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data
      .subscribe(data => {
        this.galleryItem = data['galleryItem'];
        if(typeof this.imgUrl$ === 'undefined') {
          this.imgUrl$ = new BehaviorSubject<SafeResourceUrl>(this.googlePhotoImagePreview());
        }
        else {
          this.imgUrl$.next(this.googlePhotoImagePreview());
        }
      });
  }

  ngOnDestroy(): void {
    this.imgUrl$.complete();
  }

  googlePhotoImagePreview(): SafeResourceUrl {
    const w_string = "=w" + this.galleryItem.originalWidth;
    return this.domSanitizer.bypassSecurityTrustResourceUrl(this.galleryItem.url + w_string);
  }

}
