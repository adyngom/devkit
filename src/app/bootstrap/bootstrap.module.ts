import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from 'ngx-icons';
// import { TestDirective } from './test.directive';
import * as BT from 'ngx-bootstrap';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    BT.PopoverModule,
    BT.DatepickerModule,
    BT.TypeaheadModule,
    BT.BsDatepickerModule.forRoot(),
    BT.AlertModule.forRoot(),
    FontAwesomeModule
  ],
  declarations: [],
  exports: [
    BT.PopoverModule,
    BT.DatepickerModule,
    BT.BsDatepickerModule,
    BT.TypeaheadModule,
    BT.AlertModule,
    FontAwesomeModule
  ]
})
export class BootstrapModule { }
