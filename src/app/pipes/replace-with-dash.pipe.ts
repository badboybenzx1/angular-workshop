import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replaceWithDash',
})
export class ReplaceWithDashPipe implements PipeTransform {
  transform(value: string, ...args: number[]): unknown {
    return `${value.toLocaleUpperCase()} ${args}`;
  }
}
