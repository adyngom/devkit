import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { TypeaheadMatch } from 'ngx-bootstrap';

export interface Engagement {
    engagementName: string;
    engagementCode: string;
    clientName: string;
    clientCode: string;
    partnerName: string;
}

@Component({
  selector: 'dk-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'devkit';

  public matched: Engagement;
  public clientName: string;
  public ecode;

  public engagements: Array<Engagement> = [
    {
      engagementName: 'Coca-Cola, Inc. 2016',
      engagementCode: '0000002016',
      clientName: 'Coca Cola',
      clientCode: '2016',
      partnerName: 'Coca-Cola'
    }
  ];

  onSelect = (ev: TypeaheadMatch)  => {
    // console.log(ev);
    // if (!!ev.item) {
      this.matched = ev.item;
      this.clientName = ev.value;
    // }
  }

  search = (text$: Observable<string>) => {
    return text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map( term => term.length < 10 ? [] : this.engagements.filter( e => e.engagementCode.indexOf(term) > -1).slice(0, 10))
    );
  }

  formatter = (x: {engagementCode: string}) => x.engagementCode;
}
