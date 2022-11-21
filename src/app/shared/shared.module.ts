import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SidemanuComponent } from './sidemanu/sidemanu.component';

@NgModule({
  declarations: [
    SidemanuComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    SidemanuComponent
  ]
})
export class SharedModule { }
