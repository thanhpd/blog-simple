import { NgModule } from '@angular/core';
import { MaterialModule } from './material/material.module';

@NgModule({
  imports: [
    MaterialModule
  ],
  exports: [MaterialModule],
  declarations: []
})
export class SharedModule { }
