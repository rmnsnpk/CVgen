import { Pipe, PipeTransform } from '@angular/core';
import { IListingData } from '../interfaces/listing-data';

@Pipe({
  name: 'controlOptions',
  standalone: true,
})
export class ControlOptionsPipe implements PipeTransform {
  transform(value: IListingData): string {
    return value.id;
  }
}
