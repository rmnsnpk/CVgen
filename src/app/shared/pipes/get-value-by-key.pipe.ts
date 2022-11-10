import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getValueByKey',
  standalone: true,
})
export class GetValueByKeyPipe implements PipeTransform {
  transform(value: Record<string, any>, key: string): any {
    return key ? value[key] : value;
  }
}
