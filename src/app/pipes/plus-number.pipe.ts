import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'plusNumber',
})
export class PlusNumberPipe implements PipeTransform {
  transform(value: number, args?: boolean): unknown {
    return args ? value + 1 : value;
  }
}
