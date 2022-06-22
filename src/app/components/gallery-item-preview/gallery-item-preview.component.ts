import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { GalleryItem } from 'src/types/gallery-item.type';

@Component({
  selector: 'app-gallery-item-preview',
  template: `
    <div class="lg:w-80 lg:px-0 px-8 mb-20 mx-auto">
      <img [src]="googlePhotoImagePreview()" 
        class="w-full aspect-auto border-gray-400 border break-after-avoid" />
      <div class="flex justify-end">
        <div class="w-1/2 pr-1 text-right"> 
          <a>{{galleryItem.title}}</a>
        </div>
      </div>
    </div>
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GalleryItemPreviewComponent implements OnInit {

  @Input() galleryItem: GalleryItem;

  constructor(private domSanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }
  
  googlePhotoImagePreview(): SafeResourceUrl {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(this.galleryItem.url);
  }

}
