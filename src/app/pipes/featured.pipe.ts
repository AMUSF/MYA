import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'featured'
})
export class FeaturedPipe implements PipeTransform {

  transform(value: any[]): any {
    if (value != null) {
      return value.filter((value) => value.featured === true);
    }
  };

}

