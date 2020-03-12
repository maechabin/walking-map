import { Injectable } from '@angular/core';

import { SpinnerService } from '../core/spinner.service';
import { LLMapService } from '../../domains/llmap/llmap.service';

@Injectable({
  providedIn: 'root',
})
export class MapService {
  private readonly llmapSerivce = new LLMapService();

  constructor(private spinnerService: SpinnerService) {}

  initMap(mapElem: HTMLElement): void {
    setTimeout(() => {
      this.llmapSerivce.initMap(mapElem);
    }, 0);
  }

  panTo(latlng: { lat: number; lng: number }): void {
    this.llmapSerivce.panTo(latlng);
  }
}
