import { CommonModule } from '@angular/common';
import { Component, DoCheck, forwardRef, OnInit } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
  ValidationErrors,
  Validator,
} from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { BaseControls } from '../../classes/base-control';
import { ControlErrors } from '../../interfaces/validation-errors';

// import { BaseControls } from '../../classes/base-control';

@Component({
  selector: 'cvg-input-control',
  templateUrl: './input-control.component.html',
  styleUrls: ['./input-control.component.scss'],
  standalone: true,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputControlComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => InputControlComponent),
      multi: true,
    },
  ],
  imports: [NzInputModule, ReactiveFormsModule, CommonModule],
})
export class InputControlComponent extends BaseControls implements OnInit, DoCheck, Validator {
  // constructor(@Self() @Optional() private control: NgControl) {
  //   super();
  //   this.control.valueAccessor = this;
  // }

  input = this.baseControl;

  ngDoCheck(): void {
    console.log(this.baseControl);
    console.log(this.input.valid);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  validate(control: AbstractControl): ValidationErrors | null {
    let value = control.value as string;
    const errorObj: ControlErrors = { error: 'error' };
    return value !== '' ? null : errorObj;
  }
}
