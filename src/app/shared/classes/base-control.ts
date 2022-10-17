import {
 ChangeDetectorRef,
 Directive,
 DoCheck,
 Input,
 OnInit,
} from '@angular/core';
import { ControlValueAccessor, FormControl, NgControl } from '@angular/forms';

@Directive()
export class BaseControl implements ControlValueAccessor, OnInit, DoCheck {
 @Input() label = '';

 @Input() placeholder = '';

 public baseControl = new FormControl(null);

 constructor(private ngControl: NgControl, private cdR: ChangeDetectorRef) {
  this.ngControl.valueAccessor = this;
 }

 ngOnInit() {
  this.baseControl.valueChanges.subscribe((value) => {
   this.onChange(value);
  });
 }

 ngDoCheck(): void {
  if (this.ngControl.control.errors !== this.baseControl.errors) {
   this.baseControl.setErrors(this.ngControl.control.errors);
  }

  if (this.ngControl.control.dirty) {
   this.baseControl.markAsDirty();
   this.cdR.markForCheck();
  } else {
   this.baseControl.markAsPristine();
  }
 }

 public writeValue(value: string | null): void {
  this.baseControl.setValue(value);
 }

 public registerOnChange(fn: (value: string | null) => void): void {
  this.onChange = fn;
 }

 public onTouched = (): void => undefined;

 public registerOnTouched(fn: () => void): void {
  this.onTouched = fn;
 }

 public onChange = (value: any): any => value;
}
