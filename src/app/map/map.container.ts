import { Component, OnInit, ElementRef } from '@angular/core';

import { MapService } from './map.service';

@Component({
  selector: 'app-map',
  template: `
    <div class="map"></div>
  `,
  styles: [
    `
      .map {
        width: 100%;
        height: 100vh;
      }
    `,
  ],
})
export class MapContainerComponent implements OnInit {
  private el: HTMLElement;

  constructor(public mapService: MapService, private elementRef: ElementRef) {}

  ngOnInit() {
    this.initMap();
  }

  private initMap() {
    this.el = this.elementRef.nativeElement;
    const mapElem = this.el.querySelector('.map') as HTMLElement;
    this.mapService.initMap(mapElem);
  }
}
