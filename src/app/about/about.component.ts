import { Component, OnInit } from '@angular/core';
import { GalleryItem } from 'src/types/gallery-item.type';
import { GalleryItemsService } from '../services/gallery-items.service';

@Component({
  selector: 'app-about',
  template: `
    <div class="mx-8 lg:mt-3 mb-8">
      <h3 class="font-semibold">Bio</h3>
      <p class="mb-4 pl-2 text-sm leading-tight lg:leading-snug">
        Jason Rood is an Artist from Grand Rapids, Michigan with a MFA from Virginia Commonwealth University. 
        His images incorporate meticulous drawings that use humor to talk about serious issues and some that well... are not that serious.
      </p>

      <h3 class="font-semibold">Education</h3>
      <ol class="mb-4 pl-2 text-sm leading-tight">
        <li class="mb-1.5">Virginia Commonwealth University 2015 MFA in Painting and Printmaking</li>
        <li class="mb-1.5">Grand Valley State University 2008 BFA in Art and Design with and emphasis in Illustration</li>        
      </ol>

      <h3 class="font-semibold">Exhibitions, Shows & Events</h3>
      <ol class="mb-4 pl-2 text-sm leading-tight">
        <li class="mb-1.5">2013 UICA "Limitless" Grand Rapids MI</li>
        <li class="mb-1.5">2012 Kendall College of Art and Design "Faculty and Staff Show" Grand Rapids MI</li>
        <li class="mb-1.5">2012 Nice Gallery "Cabin Time Bogus Lake Show" in Grand Rapids MI</li>
        <li class="mb-1.5">2012 Terry Berry Gallery, "West Side Stories", Grand Rapids MI</li>
        <li class="mb-1.5">2012 UICA "Live First" Event Auction, Grand Rapids MI</li>
        <li class="mb-1.5">2011 Nice Gallery, 100 Grand Show, Grand Rapids MI</li>
        <li class="mb-1.5">2011 Nice Gallery, Soft Opening Show, Grand Rapids MI</li>
        <li class="mb-1.5">2011 Space Event, Live drawing event Grand Rapids MI</li>
        <li class="mb-1.5">2010 UICA Holiday Artist Market, Grand Rapids MI</li>
        <li class="mb-1.5">2010 UICA "Live First" Event Auction, Grand Rapids MI</li>
        <li class="mb-1.5">2009 UICA Holiday Artist Market, Grand Rapids MI</li>
        <li class="mb-1.5">2009 Art Prize, Grand Rapids MI, host WMCAT</li>
        <li class="mb-1.5">2008 Society of Illustrators Student Competition, New York NY</li>
        <li class="mb-1.5">2008 BFA Senior Thesis Show "Greatest Best Idea Ever" GVSU Allendale MI</li>
        <li class="mb-1.5">2008 "333" Group Drawing Show, Avenue of the Arts Grand Rapids MI</li>
        <li class="mb-1.5">2006 "BC/AD" Group Drawing Show, Avenue of the Arts Grand Rapids MI</li>
      </ol>

      <h3 class="font-semibold">Residency</h3>
      <ol class="mb-4 pl-2 text-sm leading-tight">
        <li class="mb-1.5">2012 Cabin -Time #2 Grand Marais MN</li>
      </ol>

      <h3 class="font-semibold">Publications, Books, Collections & Blog Features</h3>
      <ol class="mb-4 pl-2 text-sm leading-tight">
        <li class="mb-1.5">2012 Juxtapoz Magazine Web Blog</li>
        <li class="mb-1.5">2011 Ambrose, Tee Shirt Design</li>
        <li class="mb-1.5">2010 Beautiful Decay Book 5, Project Page Feature</li>
        <li class="mb-1.5">2010 Beautiful Decay, Blog Feature</li>
        <li class="mb-1.5">2010 "The Teens Guide to World Domination" by Josh Shipp, St Martians (Publisher) interior</li>
        <li class="mb-1.5">2009 BOOOOOOOM, Blog feature</li>
        <li class="mb-1.5">2008 Society of Illustrators Annual</li>
        <li class="mb-1.5">2008 Fishladder, GVSU Student Arts Publication</li>
        <li class="mb-1.5">2008 GVSU Art Collection “Mascot Masquerade”</li>
      </ol>
  </div>
  `,
  styles: [
  ]
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
