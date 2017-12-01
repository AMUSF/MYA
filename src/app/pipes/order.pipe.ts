import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderPipe implements PipeTransform {

  transform(works: any[], orderDirection?: any): any {
    if (works) {
      if (orderDirection === undefined) {
        return works;
      }
      if (orderDirection === 'asc') {
        return works;
      }
      if (orderDirection === 'desc') {
        return works.reverse();
      }
      if (orderDirection !== 'asc' || orderDirection !== 'desc') {
        return works;
      }
    }
  }
}


