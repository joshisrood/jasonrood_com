import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  template: `
    <div class="flex flex-wrap max-w-screen-xl mx-auto mt-4 lg:h-[calc(100vh-1rem)]">
      <div class="lg:w-1/6 w-full my-4 lg:max-h-fit">
        <div class="w-32 mx-auto cursor-pointer">
          <img [routerLink]="['']" class="aspect-square w-full" [src]="logo" />
        </div>
        <div class="text-center">
          Jason Rood
        </div>
        <div class="text-center text-xs">
          roodjason [at] jasonrood.com
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

  constructor(private domSanitizer: DomSanitizer) {

  }

  ngOnInit(): void {
    const select = new Date().getTime() % 5 + 1;
    this.logo = this.domSanitizer.bypassSecurityTrustResourceUrl("assets/Logo" + select.toString()+".png");
  }
}
