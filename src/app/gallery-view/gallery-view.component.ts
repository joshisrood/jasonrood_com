import { Component, ElementRef, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { GalleryItem } from 'src/types/gallery-item.type';
import { GalleryItemsService } from '../services/gallery-items.service';

@Component({
  selector: 'app-gallery-view',
  template: `
    <div class="lg:px-0 p-4 mx-auto max-w-full" *ngIf="imgUrl$ | async as imgUrl" [hidden]="!show">
      <img [src]="imgUrl" 
        (load)="imgLoad($event)"
        class="block mx-auto aspect-auto border-stone-400 border" />
      <div class="flex justify-end mx-auto title-holder">
        <div class="w-1/2 pr-1 text-left "> 
          <a target="_blank" class="text-xs hover:underline text-black cursor-pointer" [href]="googlePhotoFullRezImage()">full resolution image &#x21AC;</a>
        </div>
        <div class="w-1/2 pr-1 text-right text-sm font-semibold text-black"> 
          <span>{{galleryItem.title}}</span>
        </div>
      </div>
    </div>
    <div class="mx-auto max-w-full lg:hidden mt-16 text-center">
      <h3 class="border-b border-stone-400 text-sm mx-8">
        <a [routerLink]="['/']" class="cursor-pointer">Illustrations</a>
      </h3>
      <ol class="leading-none mb-8">
        <li *ngFor="let item of galleryItems" class="mb-1.5">
          <a [routerLink]="['/'+item.id]" class="text-xs">{{item.title}}</a>
        </li>
      </ol>
    </div>
  `,
  styles: [
  ]
})
export class GalleryViewComponent implements OnInit, OnDestroy {

  galleryItem: GalleryItem;
  galleryItems: GalleryItem[];
  imgUrl$: BehaviorSubject<SafeResourceUrl | null>;
  show: boolean = false;

  private Y_PX_GUTTER: number = 90;
  private X_PX_GUTTER: number = 48;

  constructor(private domSanitizer: DomSanitizer, private route: ActivatedRoute,
     private renderer: Renderer2, private el: ElementRef, private title: Title
     ,private galleryItemsService: GalleryItemsService) { }

  ngOnInit() {
    this.galleryItems = this.galleryItemsService.getList();
    this.route.data
      .subscribe(data => {
        this.galleryItem = data['galleryItem'];
        this.title.setTitle("Jason Rood Illustration - " + this.galleryItem.title);
        const imgWidth = this.calculateWidth();

        if(typeof this.imgUrl$ === 'undefined') {
          this.imgUrl$ = new BehaviorSubject<SafeResourceUrl | null>(this.googlePhotoImagePreview(imgWidth));
        }
        else {
          this.imgUrl$.next(this.googlePhotoImagePreview(imgWidth));
        }        
      });
  }

  ngOnDestroy(): void {
    this.imgUrl$.complete();
  }

  imgLoad(event: Event): void{
    const imgWidth = this.calculateWidth();
    const screenH = this.getScreenHeight();
    const screenW = this.getContrainstWidth();

    if(screenW > 1024 && (this.galleryItem.originalWidth > screenW - this.X_PX_GUTTER 
        || this.galleryItem.originalHeight > screenH - this.Y_PX_GUTTER)) {
      const titleElement = this.el.nativeElement.querySelector(".title-holder");
      this.renderer.setStyle(titleElement,"width", imgWidth.toString() + "px");
    }
    this.show = true;
  }

  googlePhotoImagePreview(width: number): SafeResourceUrl {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(this.galleryItem.url + "=w" + width.toString());
  }

  googlePhotoFullRezImage(): SafeResourceUrl {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(this.galleryItem.url + "=w" + this.galleryItem.originalWidth.toString());
  }

  calculateWidth(): number {
    const screenH = this.getScreenHeight();
    const screenW = this.getContrainstWidth();

    if(screenW > 1024 && this.galleryItem.originalWidth > screenW - this.X_PX_GUTTER) {
      return Math.round(screenW > 1024 ? screenW * 5/6 : screenW) - this.X_PX_GUTTER;
    }

    if(screenW > 1024 && this.galleryItem.originalHeight > screenH - this.Y_PX_GUTTER) {
      const ratio = (screenH - this.Y_PX_GUTTER)/this.galleryItem.originalHeight;
      const computedW = Math.round(this.galleryItem.originalWidth*ratio);

      return computedW;
    }

    return this.galleryItem.originalWidth;
  }

  getScreenHeight(): number {
    return window.innerHeight;
  }

  getContrainstWidth(): number {
    return Math.min(window.innerWidth, this.renderer.parentNode(this.el.nativeElement).offsetWidth);
  }

}
