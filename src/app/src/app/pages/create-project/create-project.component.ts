import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { TypeaheadMatch } from 'ngx-bootstrap';

// import mocks
 import {
   ProjectTypes,
   ISOCountries,
   ProjectSectors,
   EngagementCodes
  } from './../../models/';
// end mocks import
import { ClientEngagement } from './../../models/engagement-lookup/engagement-lookup.model';


@Component({
  selector: 'dk-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.scss']
})
export class CreateProjectComponent implements OnInit {

  public matched: ClientEngagement;
  public clientName: string;
  public ecode;


  projectTypes = ProjectTypes;
  countries = ISOCountries;
  projectSectors = ProjectSectors;
  engagements = EngagementCodes;

  constructor() {
   this.matched =  {
      engagementId: '',
      engagementCode: '',
      engagementName: '',
      clientCode: '',
      clientName: '',
      partnerName: ''
    };
  }

  ngOnInit() {
  }

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
