import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderPipe implements PipeTransform {

  transform(works: any[], orderDirection ?: any): any {
    if (works) {
      if (orderDirection === undefined) {
        return works;
      } else if (orderDirection === 'asc') {
        return works;
        // return works.sort((a, b) => a.title - b.title);
      } else if (orderDirection === 'desc') {
        return works.reverse();
      } else if (orderDirection !== 'asc' || orderDirection !== 'desc') {
        return works;
      }
    }
  }
}



