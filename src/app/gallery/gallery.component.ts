import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { GalleryItem } from 'src/types/gallery-item.type';
import { GalleryItemsService } from '../services/gallery-items.service';

@Component({
  selector: 'app-gallery',
  template: `
    <div class="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 w-full">
      <app-gallery-item-preview *ngFor="let item of galleryItems" [galleryItem]="item"></app-gallery-item-preview>
    </div>
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GalleryComponent implements OnInit {

  galleryItems: GalleryItem[] = [];

  constructor(private galleryItemService: GalleryItemsService) { }

  ngOnInit(): void {
    this.galleryItems = this.galleryItemService.getList();
  }

}
