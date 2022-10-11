import { Directive, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl } from '@angular/forms';

@Directive()
export class BaseControls implements ControlValueAccessor, OnInit {
  @Input() label: string;

  public baseControl = new FormControl('');

  ngOnInit() {
    this.baseControl.valueChanges.subscribe((value) => {
      this.onChange(value);
    });
  }

  public writeValue(value: string | null): void {
    this.baseControl.setValue(value);
  }

  public registerOnChange(fn: (value: string | null) => void): void {
    this.onChange = fn;
  }

  private onTouched = (): void => undefined;

  public registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  private onChange = (value: any): any => value;
}
