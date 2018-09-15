import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'issueFilter'
})
export class IssueFilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let filter: string = args ? args.toLocaleLowerCase() : null;
    return filter ? value.filter((issue) =>
      issue.description.toLocaleLowerCase().startsWith(filter) != false) : value;
  }

}
