import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { TestDirective } from './test.directive';
// import * as BT from 'ngx-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    NgbModule
  ],
  declarations: [],
  exports: [
    NgbModule
  ]
})
export class BootstrapModule { }
