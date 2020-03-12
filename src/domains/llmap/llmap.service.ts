import * as L from 'leaflet';

import { LLMap } from './llmap';

export class LLMapService {
  llmap!: LLMap;

  initMap(elem: HTMLElement): void {
    this.llmap = new LLMap(elem);
  }

  putMarker(): void {}

  clearMarker(): void {}

  panTo(latlng: { lat: number; lng: number }): void {
    this.llmap.panTo(new L.LatLng(latlng.lat, latlng.lng));
  }
}
