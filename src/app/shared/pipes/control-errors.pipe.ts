import { Pipe, PipeTransform } from '@angular/core';
import { ValidationErrors } from '@angular/forms';
import { errorsList } from '../constants/controlErrors';

@Pipe({
  name: 'controlErrors',
  standalone: true,
})
export class ControlErrorsPipe implements PipeTransform {
  transform(value: ValidationErrors): string {
    const error: string = Object.keys(value)[0];

    return errorsList[error] ? errorsList[error] : '';
  }
}
