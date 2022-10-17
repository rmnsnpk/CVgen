import { AbstractControl } from '@angular/forms';

export interface IAuthForm {
  email: AbstractControl<any, any>;
  password: AbstractControl<any, any>;
}

// не работает
