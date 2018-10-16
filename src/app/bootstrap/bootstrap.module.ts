import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from 'ngx-icons';
// import { TestDirective } from './test.directive';
import * as BT from 'ngx-bootstrap';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    BT.PopoverModule.forRoot(),
    BT.DatepickerModule,
    BT.TypeaheadModule,
    BT.BsDatepickerModule.forRoot(),
    BT.AlertModule.forRoot(),
    BT.ModalModule.forRoot(),
    FontAwesomeModule
  ],
  declarations: [],
  exports: [
    BT.PopoverModule,
    BT.DatepickerModule,
    BT.BsDatepickerModule,
    BT.TypeaheadModule,
    BT.AlertModule,
    BT.ModalModule,
    FontAwesomeModule
  ]
})
export class BootstrapModule { }
