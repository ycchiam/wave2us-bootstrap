import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AboutComponent } from './about.component';
import { aboutRouting } from './about.routing';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    aboutRouting
  ],
  declarations: [
    AboutComponent
  ]
})
export class AboutModule { }
