import { Component, OnInit, Input } from '@angular/core';
import { Directive } from '@angular/compiler/src/core';

@Component({
  selector: 'dk-button',
  templateUrl: './button.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() text: string;
  @Input() color: string;
  @Input() type: string;
  constructor() { }

  ngOnInit() {
  }

  ButtonFactory(type = 'mat-button'): any {
    return ;
  }

}
