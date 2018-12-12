import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
@NgModule({
  declarations: [],
  exports: [
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatButtonModule, MatCheckboxModule,
  ]
})
export class MaterialComponentsModule { }
