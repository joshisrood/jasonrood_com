import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="flex flex-wrap max-w-screen-xl mx-auto mt-4 px-1">
      <div class="lg:w-1/6 w-full my-4">
        <div class="w-32 mx-auto">
          <img class="aspect-square w-full" src="assets/Logo.png" />
        </div>
        <div class="text-center">
          Jason Rood
        </div>
        <div class="text-center text-xs">
          roodjason [at] jasonrood.com
        </div>
      </div>
      <div class="w-full lg:w-5/6">
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  styles: []
})
export class AppComponent {
  
}
