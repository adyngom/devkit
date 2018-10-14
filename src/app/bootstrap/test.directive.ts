import { Directive, Input } from '@angular/core';
import { getValueFromObject } from 'ngx-bootstrap/typeahead/typeahead-utils';
import { TypeaheadMatch } from 'ngx-bootstrap/typeahead/typeahead-match.class';
import { TypeaheadDirective } from 'ngx-bootstrap/typeahead/typeahead.directive';

@Directive({
    selector: '[dkTa]',
    exportAs: 'dk-tpah'
})
export class TestDirective extends TypeaheadDirective {
    @Input() typeaheadDisplayField: string;

    ngOnInit() {
        this.typeaheadOptionField = this.typeaheadDisplayField;
        console.log(this.typeaheadOptionField);
    }

    prepareMatches(options: any[]): void {
        
        super.prepareMatches(options);

        alert('from extended');
        
        const limited: any[] = options.slice(0, this.typeaheadOptionsLimit);
    
        if (this.typeaheadGroupField) {
          let matches: TypeaheadMatch[] = [];
    
          // extract all group names
          const groups = limited
            .map((option: any) =>
              getValueFromObject(option, this.typeaheadGroupField)
            )
            .filter((v: string, i: number, a: any[]) => a.indexOf(v) === i);
    
          groups.forEach((group: string) => {
            // add group header to array of matches
            matches.push(new TypeaheadMatch(group, group, true));
    
            // add each item of group to array of matches
            matches = matches.concat(
              limited
                .filter(
                  (option: any) =>
                    getValueFromObject(option, this.typeaheadGroupField) === group
                )
                .map(
                  (option: any) =>
                    new TypeaheadMatch(
                      option,
                      getValueFromObject(option, this.typeaheadOptionField)
                    )
                )
            );
          });
    
          this._matches = matches;
        } else {
          this._matches = limited.map(
            (option: any) =>
              new TypeaheadMatch(
                option,
                getValueFromObject(option, this.typeaheadDisplayField)
              )
          );
          console.log(this._matches);
        }
      }
}
 