import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitTo'
})
export class LimitToPipe implements PipeTransform {

  transform(value: any[], arraySize: number): any[] {
    return value.slice(0, arraySize);
  }

}
