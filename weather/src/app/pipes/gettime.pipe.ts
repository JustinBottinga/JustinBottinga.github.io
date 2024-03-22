import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gettime',
  standalone: true,
})
export class GettimePipe implements PipeTransform {
  transform(value: string, getHourInt: boolean): number {
    if (getHourInt) {
      if (value.charAt(0) == '0') {
        value = value.substring(1, 2);
      } else {
        value = value.substring(0, 2);
      }
    } else if (!getHourInt) {
      value = value.substring(0, 2);
    }
    return parseInt(value);
  }
}
