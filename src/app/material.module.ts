import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';

const modules = [
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatSliderModule,
  MatDividerModule,
  MatGridListModule,
];

@NgModule({
  imports: modules,
  exports: modules,
})
export class MaterialModule {}
