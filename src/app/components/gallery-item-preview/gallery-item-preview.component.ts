import { ChangeDetectionStrategy, Component, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { fromEvent, Observable, Subscription, BehaviorSubject, debounceTime } from 'rxjs';

import { GalleryItem } from 'src/types/gallery-item.type';

@Component({
  selector: 'app-gallery-item-preview',
  template: `
    <div class="lg:w-80 lg:px-0 px-8 mb-20 mx-auto">
      <img [src]="imgUrl$ | async" 
        class="w-full aspect-auto border-stone-400 border break-after-avoid cursor-pointer" 
        [routerLink]="[galleryItem.id]"/>
      <div class="flex justify-end">
        <div class="w-1/2 pr-1 text-right font-semibold text-gray-700"> 
          <a [routerLink]="[galleryItem.id]" class="cursor-pointer">{{galleryItem.title}}</a>
        </div>
      </div>
    </div>
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.Default
})
export class GalleryItemPreviewComponent implements OnInit, OnDestroy {

  resizeObservable$: Observable<Event>;
  resizeSubscription$: Subscription;
  imgUrl$: BehaviorSubject<SafeResourceUrl>;

  @Input() galleryItem: GalleryItem;

  constructor(private domSanitizer: DomSanitizer, 
    private el: ElementRef) { }

  ngOnInit(): void {
    this.imgUrl$ = new BehaviorSubject<SafeResourceUrl>(this.googlePhotoImagePreview());
    this.resizeObservable$ = fromEvent(window, 'resize');
    this.resizeSubscription$ = this.resizeObservable$
      .pipe(debounceTime(250))
      .subscribe( _ => {
        this.imgUrl$.next(this.googlePhotoImagePreview());
      });


  }

  ngOnDestroy(): void {
    this.resizeSubscription$.unsubscribe();
    this.imgUrl$.complete();
  }
  
  googlePhotoImagePreview(): SafeResourceUrl {
    const w_string = "=w" + this.el.nativeElement.offsetWidth;
    return this.domSanitizer.bypassSecurityTrustResourceUrl(this.galleryItem.url + w_string);
  }

}
