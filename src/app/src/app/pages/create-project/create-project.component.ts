import { Component, OnInit } from '@angular/core';

// import mocks
 import {
   ProjectTypes,
   ISOCountries,
   ProjectSectors
  } from './../../models/';
// end mocks import

@Component({
  selector: 'dk-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.scss']
})
export class CreateProjectComponent implements OnInit {

  projectTypes = ProjectTypes;
  countries = ISOCountries;
  projectSectors = ProjectSectors;

  constructor() {}

  ngOnInit() {
  }

}
