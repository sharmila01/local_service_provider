import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userNameFormat',
  standalone: true
})
export class UserNameFormatPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
