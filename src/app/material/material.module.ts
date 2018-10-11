import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import * as MD from '@angular/material';

import { ButtonComponent} from './components';
import { Safe } from './../lib/pipes/safehtml.pipe';
import { TestPipe } from './../lib/pipes/test.pipe';

@NgModule({
  imports: [
    CommonModule,
    MD.MatButtonModule,
    MD.MatIconModule,
    MD.MatCardModule,
    MD.MatFormFieldModule,
    MD.MatInputModule
  ],
  declarations: [ButtonComponent, Safe, TestPipe],
  exports: [
    MD.MatButtonModule,
    MD.MatIconModule,
    MD.MatCardModule,
    MD.MatFormFieldModule,
    MD.MatInputModule,
    Safe,
    TestPipe,
    ButtonComponent
  ]
})
export class MaterialModule { }
