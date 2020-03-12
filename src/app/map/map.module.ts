import { NgModule } from '@angular/core';

import { CustomMaterialModule } from '../core/custom-material.module';
import { MapContainerComponent } from './map.container';

@NgModule({
  declarations: [MapContainerComponent],
  imports: [CustomMaterialModule],
  exports: [MapContainerComponent],
})
export class MapModule { }
